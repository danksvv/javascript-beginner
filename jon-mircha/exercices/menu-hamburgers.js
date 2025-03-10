export default function menuHamburgers(btnPanel, panel, menuLinks) {
  document.addEventListener("click", (e) => {
    if (e.target.matches(btnPanel) || e.target.matches(`${btnPanel} *`)) {
      document.querySelector(panel).classList.toggle("is-active");
      document.querySelector(btnPanel).classList.toggle("is-active");
    }
    if (e.target.matches(menuLinks) || e.target.matches(`${menuLinks} *`)) {
      document.querySelector(panel).classList.remove("is-active");
      document.querySelector(btnPanel).classList.remove("is-active");
    }
  });
}
