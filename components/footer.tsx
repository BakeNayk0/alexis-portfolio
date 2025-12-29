import { FooterHero } from "./footer-hero";
import { NekawaLink } from "./nekawa-link";

export const Footer = () => {
  return (
    <footer className="sm:text-sm text-xs flex flex-col w-full items-start sm:items-center mt-36 gap-2">
      <div className="px-4">
        <p>This website is an ongoing process !</p>
        <p className="text-white/40">
          &copy; 2025 - Alexis Sanchis from <NekawaLink>Nekawa</NekawaLink>
        </p>
      </div>
      <FooterHero />
    </footer>
  );
};
