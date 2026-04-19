import { NekawaLink } from "./nekawa-link";
import Image from "next/image";

const HeroAvatar = () => {
  return (
    <NekawaLink>
      <Image
        className="rounded-full sm:w-60 sm:h-60 w-40 h-40 object-cover object-top bg-primary-500/10 dark:bg-primary-500/20 shadow-lg"
        style={{
          backgroundImage: "radial-gradient(125% 125% at 50% 0%, transparent 50%, color-mix(in srgb, var(--color-primary-500) 20%, transparent))",
        }}
        alt="Alexis"
        priority
        width={400}
        height={400}
        src="/alexis_pro.JPG"
      />
    </NekawaLink>
  );
};

export default HeroAvatar;
