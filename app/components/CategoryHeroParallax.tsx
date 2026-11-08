"use client";

import { useEffect, useRef } from "react";

interface CategoryHeroParallaxProps {
  heroImg: string;
}

export default function CategoryHeroParallax({ heroImg }: CategoryHeroParallaxProps) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (bgRef.current) {
            const scrollY = window.scrollY;
            if (scrollY < 1200) {
              bgRef.current.style.transform = `translate3d(0, ${scrollY * 0.38}px, 0)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={bgRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        top: "-20%",
        left: 0,
        right: 0,
        bottom: "-20%",
        backgroundImage: `url("${heroImg}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.3,
        filter: "contrast(1.15) brightness(0.9)",
        willChange: "transform",
        transform: "translate3d(0, 0, 0)",
        pointerEvents: "none",
      }}
    />
  );
}

