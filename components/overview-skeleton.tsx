import { Binary, BriefcaseBusiness } from "lucide-react"
import { SkillListSkeleton } from "./skill-list"
import { WorkListSkeleton } from "./work-list"

const OverviewSkeleton = () => {
  return (
    <div className="pt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full z-10">
      <div className="w-full flex flex-col gap-8 border border-border p-5 rounded-xl overflow-hidden">
        <div className="flex flex-row gap-4 items-center">
          <BriefcaseBusiness className="text-muted-foreground" />
          Experience
        </div>
        <WorkListSkeleton />
      </div>

      <div className="w-full flex flex-col gap-8 border border-border p-5 rounded-xl overflow-hidden">
        <div className="flex flex-row gap-4 items-center">
          <Binary className="text-muted-foreground" />
          Skills
        </div>
        <SkillListSkeleton />
      </div>
    </div>
  )
}

export default OverviewSkeleton
