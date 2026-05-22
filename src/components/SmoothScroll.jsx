import { useEffect } from 'react';
import Lenis from 'lenis';
import { cinematicEase } from '../utils/scroll';

export default function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: cinematicEase,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.08,
      touchInertiaMultiplier: 28,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.15,
      autoResize: true,
    });

    window.__cloveLenis = lenis;

    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__cloveLenis;
    };
  }, []);

  return null;
}
