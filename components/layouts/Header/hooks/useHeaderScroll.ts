"use client";

import { useEffect, useRef, useState } from "react";

export const useHeaderScroll = () => {
  const [show, setShow] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY.current) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { show };
};