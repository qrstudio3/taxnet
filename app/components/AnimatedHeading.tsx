"use client";
import React, { useEffect, useRef, useState } from "react";

export default function AnimatedHeading({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? "blur(0px)" : "blur(12px)",
        transition: "transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 1.2s ease, filter 1.2s ease",
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </div>
  );
}
