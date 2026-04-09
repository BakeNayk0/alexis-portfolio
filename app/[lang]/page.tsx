import OverviewSkeleton from "@/components/overview-skeleton";
import { Suspense } from "react";
import Overview from "@/components/overview";
import HeroSection from "@/components/home/hero-section";
import { getDictionary } from "@/lib/dictionaries";

export default async function Home(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang);

  return (
    <>
      <div className="flex flex-col gap-8 z-10 w-full">
        <HeroSection dict={dict} />
        <Suspense fallback={<OverviewSkeleton />}>
          <Overview dict={dict} />
        </Suspense>
      </div>
    </>
  );
}