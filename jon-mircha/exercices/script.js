"use strict";

const $btnHamburger = document.querySelector("#btn-hamburger");
const $isOpen = document.querySelector("#is-open");
const $menuLinks = document.querySelectorAll(".menu a");

$btnHamburger.addEventListener("click", function () {
  // si el menu esta abierto, lo cierra y si esta cerrado lo abre

  // first way ---------------------------------

  if ($isOpen.classList.contains("is-active")) {
    $isOpen.classList.remove("is-active");
    $btnHamburger.classList.remove("is-active");
  } else {
    $isOpen.classList.add("is-active");
    $btnHamburger.classList.add("is-active");
  }
  // second way --------------------------------
  //
  // $isOpen.classList.contains("is-active")
  //   ? $isOpen.classList.remove("is-active")
  //   : $isOpen.classList.add("is-active");
  //
  // third way --------------------------------
  //
  // $isOpen.classList.toggle("is-active");
});

$menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    if ($isOpen.classList.contains("is-active")) {
      $isOpen.classList.remove("is-active");
      $btnHamburger.classList.remove("is-active");
    }
  });
});
