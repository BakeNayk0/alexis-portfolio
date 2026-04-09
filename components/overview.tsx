import { Binary, BriefcaseBusiness, ArrowRight } from "lucide-react"
import { SkillList } from "./skill-list"
import { WorkList } from "./work-list"
import { Button } from "./ui/button"
import Link from "next/link"
import type { Dictionary } from "@/lib/dictionaries"

const Overview = ({ dict }: { dict: Dictionary }) => {
  return (
    <div className="pt-6 flex flex-col w-full z-10 gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        <div className="h-fit flex flex-col gap-6 bg-card/50 backdrop-blur-sm border border-border/50 p-6 rounded-xl opacity-0 animate-fade-up stagger-2">
          <div className="flex flex-row gap-3 items-center">
            <div className="p-2 rounded-lg bg-primary/10">
              <BriefcaseBusiness className="h-5 w-5 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="font-semibold text-foreground">{dict.overview.experience}</h2>
          </div>
          {/*@ts-ignore export server-component */}
          <WorkList dict={dict} />
          <Link href="/cv_alexis_sanchis.pdf" target="_blank" className="group">
            <Button className="w-full group bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground transition-all duration-300">
              <span>{dict.overview.view_resume}</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="h-fit flex flex-col gap-6 bg-card/50 backdrop-blur-sm border border-border/50 p-6 rounded-xl opacity-0 animate-fade-up stagger-3">
          <div className="flex flex-row gap-3 items-center">
            <div className="p-2 rounded-lg bg-primary/10">
              <Binary className="h-5 w-5 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="font-semibold text-foreground">{dict.overview.skills}</h2>
          </div>
          {/*@ts-ignore expect server-component */}
          <SkillList dict={dict} />
        </div>
      </div>
    </div>
  )
}

export default Overview
