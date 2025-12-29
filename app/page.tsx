import OverviewSkeleton from "@/components/overview-skeleton";
import { Suspense } from "react";
import Overview from "@/components/overview";
import HeroSection from "@/components/home/hero-section";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-8 z-10 w-full">
        <HeroSection />
        <Suspense fallback={<OverviewSkeleton />}>
          <Overview />
        </Suspense>
      </div>
    </>
  );
}
