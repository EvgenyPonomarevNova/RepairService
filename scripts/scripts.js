/* переключатель темы */
function toggleTheme() {
  document.body.classList.toggle("light");
  document.getElementById("theme").textContent =
    document.body.classList.contains("light") ? "🌙" : "☀️";
}
/* GSAP-анимация */
gsap.from(".services th", {
  y: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: { trigger: ".services", start: "top 80%" },
});
gsap.from(".review", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: { trigger: ".reviews", start: "top 80%" },
});
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
const carousel = document.getElementById("carousel");
let index = 0;
function scrollToIndex(i) {
  carousel.scrollTo({ left: i * 320, behavior: "smooth" });
}
function next() {
  index = (index + 1) % 7;
  scrollToIndex(index);
}
function prev() {
  index = (index + 6) % 7;
  scrollToIndex(index);
}
/* авто-прокрутка каждые 4 сек */
setInterval(next, 4000);
