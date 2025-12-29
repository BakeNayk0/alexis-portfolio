import { Binary, BriefcaseBusiness, ArrowRight } from "lucide-react"
import { SkillList } from "./skill-list"
import { WorkList } from "./work-list"
import { BlogPreviewList } from "./blog-preview-list"
import { Button } from "./ui/button"
import Link from "next/link"

const Overview = () => {
  return (
    <div className="pt-6 flex flex-col w-full items-center lg:items-start justify-center lg:flex-row gap-8 z-10">
      {/*@ts-ignore expec server component*/}
      <BlogPreviewList />
      <div className="flex flex-col gap-6 w-full max-w-xl lg:max-w-6xl">
        <div className="h-fit w-full max-w-xl lg:max-w-6xl flex flex-col gap-6 bg-card/50 backdrop-blur-sm border border-border/50 p-6 rounded-xl opacity-0 animate-fade-up stagger-2">
          <div className="flex flex-row gap-3 items-center">
            <div className="p-2 rounded-lg bg-primary/10">
              <BriefcaseBusiness className="h-5 w-5 text-primary-400" />
            </div>
            <h2 className="font-semibold text-foreground">Experience</h2>
          </div>
          {/*@ts-ignore export server-component */}
          <WorkList />
          <Link href="/cv_alexis_sanchis.pdf" target="_blank" className="group">
            <Button className="w-full group bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground transition-all duration-300">
              <span>View Full Resume</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="h-fit flex flex-col gap-6 bg-card/50 backdrop-blur-sm border border-border/50 p-6 rounded-xl opacity-0 animate-fade-up stagger-3">
          <div className="flex flex-row gap-3 items-center">
            <div className="p-2 rounded-lg bg-primary/10">
              <Binary className="h-5 w-5 text-primary-400" />
            </div>
            <h2 className="font-semibold text-foreground">Skills & Technologies</h2>
          </div>
          {/*@ts-ignore expect server-component */}
          <SkillList />
          <Link href="/techs" className="group">
            <Button className="w-full group bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground transition-all duration-300">
              <span>Explore All Skills</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Overview
