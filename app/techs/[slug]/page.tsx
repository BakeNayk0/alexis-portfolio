import { getTechs, getTechByName } from "@/lib/techs"
import { PreviousButton } from "@/components/ui/previous-button"
import { notFound } from "next/navigation"
import Image from "next/image"

export async function generateStaticParams() {
  const techs = await getTechs()
  return techs.map((tech) => ({ slug: tech.name.toLowerCase() }))
}

const TechPageSlug = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params
  const tech = await getTechByName(slug)

  if (!tech) notFound()

  return (
    <div className="relative max-w-sm sm:max-w-3xl w-full mx-auto px-6 sm:px-4 space-y-4">
      <div className="flex justify-center mt-2">
        <div className="max-w-xs sm:max-w-3xl sm:w-full flex flex-col gap-8">
          <div className="text-muted-foreground flex items-center gap-1">
            <PreviousButton className="mr-2" />
          </div>
          <div className="flex items-center gap-6">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image src={`/${tech.url}`} alt={tech.name} fill className="object-contain" />
            </div>
            <h1 className="text-5xl font-medium font-sans text-foreground">{tech.name}</h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">{tech.description}</p>
        </div>
      </div>
    </div>
  )
}

export default TechPageSlug
