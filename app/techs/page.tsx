import { Suspense } from "react";
import { TechList, TechListSkeleton } from "@/features/tech/components/TechList";
import { Heading } from "@/components/ui/heading";

const TechPage = () => {
  return (
    <div className="max-w-5xl px-4 flex flex-col gap-6">
      <div className="grid sm:grid-cols-3 gap-x-4 gap-y-8">
        <Suspense fallback={<TechListSkeleton />}>
          {/*@ts-ignore expect server component*/}
          <TechList />
        </Suspense>
      </div>
    </div>
  );
};

export default TechPage;
