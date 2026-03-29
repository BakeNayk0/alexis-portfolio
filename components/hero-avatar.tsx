import { NekawaLink } from "./nekawa-link";
import Image from "next/image";

const HeroAvatar = () => {
  return (
    <NekawaLink>
      <Image
        className="rounded-full sm:w-60 sm:h-60 w-40 h-40 object-cover bg-emerald-500/10 dark:bg-emerald-500/20"
        style={{
          backgroundImage:
            "radial-gradient(125% 125% at 50% 0%, transparent 50%, #10b98120)",
        }}
        alt=""
        loading="lazy"
        width="400"
        height="400"
        decoding="async"
        src="/nayko.png"
      />
    </NekawaLink>
  );
};

export default HeroAvatar;
