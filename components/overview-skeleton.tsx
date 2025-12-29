import { Binary, BriefcaseBusiness } from "lucide-react";
import { BlogPreviewSkeleton } from "./blog-preview-list";
import { SkillListSkeleton } from "./skill-list";
import { WorkListSkeleton } from "./work-list";

// OverviewSkeleton.tsx
const OverviewSkeleton = () => {
  return (
    <div className="pt-6 flex w-full flex-col lg:flex-row gap-8 z-10">
      {/* Left column */}
      <div className="w-full lg:max-w-[36rem] min-w-0 order-last lg:order-first">
        <BlogPreviewSkeleton />
      </div>

      {/* Right column */}
      <div className="flex flex-col gap-4 w-full lg:flex-1 max-w-xl lg:max-w-6xl min-w-0">
        <div className="w-full flex flex-col gap-8 border border-white/10 p-5 rounded-xl overflow-hidden">
          <div className="flex flex-row gap-4 items-center">
            <BriefcaseBusiness className="text-white/30" />
            Work
          </div>
          <WorkListSkeleton />
        </div>

        <div className="w-full flex flex-col gap-8 border border-white/10 p-5 rounded-xl overflow-hidden">
          <div className="flex flex-row gap-4 items-center">
            <Binary className="text-white/30" />
            Skills
          </div>
          <SkillListSkeleton />
        </div>
      </div>
    </div>
  );
};

export default OverviewSkeleton;
