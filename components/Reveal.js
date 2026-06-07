"use client";

import { useEffect, useRef, useState } from "react";

// Wrapper qui révèle son contenu au scroll (fondu + translation).
export default function Reveal({ children, className = "", as: Tag = "div", ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            o.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [shown]);

  return (
    <Tag ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
