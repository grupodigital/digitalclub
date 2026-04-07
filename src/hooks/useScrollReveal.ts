"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // ── Intersection Observer for reveal animations ──
    const revealTargets = el.querySelectorAll(
      "[data-reveal], [data-reveal-left], [data-reveal-right], [data-reveal-scale], [data-reveal-blur], [data-stagger], [data-img-reveal], [data-line-grow]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    revealTargets.forEach((target) => observer.observe(target));

    // ── Scroll-driven parallax + scale ──
    const parallaxEls = el.querySelectorAll("[data-parallax]");
    const scaleEls = el.querySelectorAll("[data-scale-in]");
    const rotateEls = el.querySelectorAll("[data-rotate]");
    const counterEls = el.querySelectorAll("[data-counter]");
    const counterDone = new Set<Element>();

    // Counter animation
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counterDone.has(entry.target)) {
            counterDone.add(entry.target);
            const target = entry.target as HTMLElement;
            const end = target.dataset.counter || "0";
            const isNum = /^\d+$/.test(end.replace("+", ""));

            if (isNum) {
              const numEnd = parseInt(end.replace("+", ""));
              const suffix = end.includes("+") ? "+" : "";
              let current = 0;
              const step = Math.ceil(numEnd / 40);
              const interval = setInterval(() => {
                current += step;
                if (current >= numEnd) {
                  current = numEnd;
                  clearInterval(interval);
                }
                target.textContent = current + suffix;
              }, 30);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    counterEls.forEach((el) => counterObserver.observe(el));

    // Scroll handler for parallax, scale, rotate
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const winH = window.innerHeight;

      parallaxEls.forEach((item) => {
        const el = item as HTMLElement;
        const speed = parseFloat(el.dataset.parallax || "0.1");
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - winH / 2;
        el.style.transform = `translateY(${center * speed * -1}px)`;
      });

      scaleEls.forEach((item) => {
        const el = item as HTMLElement;
        const rect = el.getBoundingClientRect();
        const progress = 1 - Math.max(0, Math.min(1, rect.top / winH));
        const scale = 1 + progress * 0.08;
        const img = el.querySelector("img");
        if (img) {
          (img as HTMLElement).style.transform = `scale(${scale})`;
        }
      });

      rotateEls.forEach((item) => {
        const el = item as HTMLElement;
        const speed = parseFloat(el.dataset.rotate || "0.02");
        el.style.transform = `rotate(${scrollY * speed}deg)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      counterObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return ref;
}
