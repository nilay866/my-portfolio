document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-content");
  hero.style.opacity = 0;
  setTimeout(() => {
    hero.style.transition = "1.5s";
    hero.style.opacity = 1;
  }, 200);
});
