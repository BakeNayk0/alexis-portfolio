import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className, onClick, ...props }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(`flex p-6 flex-col rounded-xl gap-4 hover:bg-primary-200/5 hover:border-primary-400 border border-transparent 
      transition-all duration-200`, className)}
    >
      {children}
    </div>
  );
};
