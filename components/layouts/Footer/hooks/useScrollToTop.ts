"use client";

import { usePathname } from "next/navigation";

export const useScrollToTop = () => {
  const pathname = usePathname();

  const handleScrollToTop = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return handleScrollToTop;
};