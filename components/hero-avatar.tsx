import { NekawaLink } from "./nekawa-link";
import Image from "next/image";

const HeroAvatar = () => {
  return (
    <NekawaLink>
      <Image
        style={{
          backgroundImage:
            "radial-gradient(125% 125% at 50% 0%, #020617 50%, #059669",
        }}
        alt=""
        loading="lazy"
        width="400"
        height="400"
        decoding="async"
        data-nimg="1"
        className="rounded-full sm:w-60 sm:h-60 w-40 h-40 object-cover"
        src="/nayko.png"
      />
    </NekawaLink>
  );
};

export default HeroAvatar;
