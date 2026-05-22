export const cinematicEase = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export const scrollToTarget = (target, offset = -80) => {
  const lenis = window.__cloveLenis;

  if (lenis) {
    lenis.scrollTo(target, {
      offset,
      duration: 1.15,
      easing: cinematicEase,
    });
    return;
  }

  const element = typeof target === 'string' ? document.querySelector(target) : target;
  const top = element
    ? element.getBoundingClientRect().top + window.scrollY + offset
    : Number(target) || 0;

  window.scrollTo({ top, behavior: 'auto' });
};

export const scrollToTop = () => {
  scrollToTarget(0, 0);
};
