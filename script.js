function onLoad() {
  const ham = document.querySelector(".mobile-nav-icon");
  const nav = document.querySelector(".main-nav");
  ham.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

window.addEventListener("load", () => {
  onLoad();
});
