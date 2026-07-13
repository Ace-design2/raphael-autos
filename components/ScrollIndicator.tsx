"use client";

import React, { useEffect, useState } from "react";

export const ScrollIndicator = (): React.JSX.Element => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = documentHeight > 0 ? Math.min(100, Math.max(0, (currentScrollY / documentHeight) * 100)) : 0;
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] pointer-events-none bg-transparent">
      <div
        className="h-full bg-cooliocns-gold transition-all duration-150 ease-out shadow-[0_0_12px_rgba(201,162,39,0.8),0_0_24px_rgba(201,162,39,0.4)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollIndicator;
