import { Earth } from "lucide-react";
import dynamic from "next/dynamic";
import { HeroTitle } from "../hero-title";
import { Badge } from "../ui/badge";

const HeroAvatar = dynamic(() => import("@/components/hero-avatar"));

const HeroSection = () => {
  return (
    <div className="flex-col-reverse min-w-full flex flex-col lg:flex-row items-start mt-20 sm:mt-36 gap-8 px-6 lg:gap-0">
      <HeroTitle />
      <div className="w-full mx-auto justify-center items-center flex flex-col gap-3">
        <HeroAvatar />
        <div className="flex items-center gap-3">
          <Earth size={20} className="text-orange-500" />
          <p>France</p>
        </div>
        <div className="flex gap-2 items-center">
          <Badge variant="default" className="rounded-full">
            French
          </Badge>
          <Badge variant="default" className="rounded-full">
            English
          </Badge>
        </div>
      </div>
    </div>
  );
};

HeroSection.displayName = "HeroSection";

export default HeroSection;
