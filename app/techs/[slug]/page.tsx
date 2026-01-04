import { getTechs, getTechBySlug } from "@/lib/techs"
import { PreviousButton } from "@/components/ui/previous-button"
import { notFound } from "next/navigation"
import Image from "next/image"

export async function generateStaticParams() {
  const techs = await getTechs()
  return techs.map((tech) => ({ slug: tech.slug }))
}

const TechPageSlug = async (props: { params: { slug: string } }) => {
  const { slug } = props.params
  const tech = await getTechBySlug(slug)

  if (!tech) notFound()

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl">
        {/* Back button */}
        <div className="mb-8 animate-fade-up">
          <PreviousButton href="/techs" />
        </div>

        {/* Tech header card */}
        <div className="mb-8 animate-fade-up animation-delay-100">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-lg transition-all hover:shadow-xl">
            {/* Gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl bg-muted/50 p-4 flex items-center justify-center">
                {tech.slug === "nextjs" ? (
                  <>
                    <Image
                      src="/nextjs-icon-dark.svg"
                      alt={tech.name}
                      width={96}
                      height={96}
                      className="dark:block hidden"
                    />
                    <Image
                      src="/nextjs-icon-light.svg"
                      alt={tech.name}
                      width={96}
                      height={96}
                      className="dark:hidden block"
                    />
                  </>
                ) : (
                  <Image src={`/${tech.url}`} alt={tech.name} fill className="object-contain p-2" />
                )}
              </div>

              {/* Tech name */}
              <div className="flex-1">
                <h1 className="text-4xl sm:text-5xl font-bold font-sans text-foreground mb-2">{tech.name}</h1>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">Technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description section */}
        <div className="animate-fade-up animation-delay-200">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-foreground mb-4">About {tech.name}</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">{tech.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechPageSlug
