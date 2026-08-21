import { Hero } from "@/components/sections/hero"
import { Experience } from "@/components/sections/experience"
import { Skills } from "@/components/sections/skills"
import { Contact } from "@/components/sections/contact"
import { getDictionary } from "@/lib/dictionaries"

export default async function Home(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params
  const dict = await getDictionary(params.lang)

  return (
    <div className="flex w-full flex-col gap-14 sm:gap-16">
      <Hero dict={dict} />
      <Experience dict={dict} />
      <Skills dict={dict} />
      <Contact dict={dict} />
    </div>
  )
}
