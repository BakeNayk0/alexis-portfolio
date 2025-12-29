import { Binary, BriefcaseBusiness } from "lucide-react";
import { SkillList } from "./skill-list";
import { WorkList } from "./work-list";
import { BlogPreviewList } from "./blog-preview-list";
import { Button } from "./ui/button";
import Link from "next/link";

const Overview = () => {
  return (
    <div className="pt-6 flex flex-col w-full items-center lg:items-start justify-center lg:flex-row gap-8 z-10">
      {/*@ts-ignore expec server component*/}
      <BlogPreviewList />
      <div className="flex flex-col gap-4 w-full max-w-xl lg:max-w-6xl">
        <div className="h-fit w-full max-w-xl lg:max-w-6xl flex flex-col gap-8 border border-white/10 p-5 rounded-xl">
          <div className="flex flex-row gap-4 items-center">
            <BriefcaseBusiness className="text-white/30" />
            Work
          </div>
          {/*@ts-ignore export server-component */}
          <WorkList />
          <Link href="/cv_alexis_sanchis.pdf" target="_blank">
            <Button className="w-full" type="button">
              Show my CV
            </Button>
          </Link>
        </div>
        <div className="h-fit flex flex-col gap-8 border border-white/10 p-5 rounded-xl">
          <div className="flex flex-row gap-4 items-center">
            <Binary className="text-white/30" />
            Skills
          </div>
          {/*@ts-ignore expect server-component */}
          <SkillList />
          <Link href="/techs" className="flex gap-2 items-center">
            <Button className="w-full" type="button">
              See more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Overview;
