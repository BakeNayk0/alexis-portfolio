import { TechList } from "@/components/tech-list"

const TechPage = () => {
  return (
    <div className="max-w-5xl px-4 flex flex-col gap-6">
      <div className="grid sm:grid-cols-3 gap-x-4 gap-y-8">
        <TechList />
      </div>
    </div>
  )
}

export default TechPage
