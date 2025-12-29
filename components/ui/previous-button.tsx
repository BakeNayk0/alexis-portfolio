"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface PreviousButtonProps {
  className?: string;
  onClick?: () => void;
  asChild?: boolean;
}

export const PreviousButton = ({ className, onClick, asChild }: PreviousButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <button
      className={`hover:bg-primary-200/20 transition-all cursor-pointer rounded-full w-fit border bg-gray-100/10 border-primary-200/60 p-3 ${className}`}
      onClick={!asChild ? (onClick ?? handleClick) : undefined}
    >
      <ArrowLeft className="w-4 h-4 text-white/60" />
    </button>
  );
};
