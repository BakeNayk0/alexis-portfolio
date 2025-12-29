import Link from "next/link";
import { ReactNode } from "react";

export const NekawaLink = ({ children }: { children: ReactNode }) => {
  return (
    <Link target="_blank" href="https://tree.nekawa.fr/">
      {children}
    </Link>
  );
};
