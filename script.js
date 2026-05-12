const stickyCta = document.querySelector(".sticky-cta");
const hero = document.querySelector(".hero");

if (stickyCta && hero) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      stickyCta.classList.toggle("is-visible", !entry.isIntersecting);
    },
    { threshold: 0.18 }
  );

  observer.observe(hero);
}

document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;

    document.querySelectorAll("details[open]").forEach((openDetail) => {
      if (openDetail !== detail) openDetail.open = false;
    });
  });
});
