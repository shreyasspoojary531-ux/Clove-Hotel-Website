export const scrollToTarget = (target, offset = -80) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  const top = element
    ? element.getBoundingClientRect().top + window.scrollY + offset
    : Number(target) || 0;

  window.scrollTo({ top, behavior: 'auto' });
};

export const scrollToTop = () => {
  scrollToTarget(0, 0);
};
