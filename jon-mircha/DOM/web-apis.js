// WEB API (Aplication Programing Interface)
// DOM (Document Object Model) API
// BOM (Browser Object Model) API
// CSSOM (CSS Object Model) API
// others:
// Events API
// Forms API
// AJAX-Fetch API
// Canvas API
// MatchMedia API ....
//
//

// let text =
//   "Hello, I am a text to speech API, this is a document object model API with JavaScript";
//
// const speaks = (text) => {
//   // const utterance = new SpeechSynthesisUtterance(text);
//   // speechSynthesis.speak(utterance);
//   speechSynthesis.speak(new SpeechSynthesisUtterance(text));
// };
//
// console.log(speaks(text));
//
//
// ============ DOM (Document Object Model) ============
//
// elememts of the DOM

// console.log(window);
// console.log(window.document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.html); // not working
// console.log(document.documentElement); // this is the same as document.html
// console.log(document.doctype);
// console.log(document.title);
// console.log(document.links);
// console.log(document.images);
// console.log(document.scripts);
// document.write(
//   "Hello, I am a text to speech API, this is a document object model API with JavaScript",
// );
//
// setTimeout(() => {
//   console.log(document.getSelection().toString());
// }, 3000);
//
// Nodes, elements and selectors in the DOM :
//
// all get elements by id, class, tag, name, querySelector, querySelectorAll is a method of the document object, but now not is usual to use the getElementsBy... methods
// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("name"));
// console.log(document.getElementById("menu"));
//
// // instead of the getElementsBy... methods, now is more common to use the querySelector and querySelectorAll methods
// console.log(document.querySelector("#menu"));
// console.log(document.querySelector("a"));
// console.log(document.querySelectorAll("a"));
//
// document.querySelectorAll(".card").forEach((element) => {
//   console.log(element);
// });
//
// console.log(document.querySelectorAll(".card")[0]);
// console.log(document.querySelectorAll(".card")[1]);
// console.log(document.querySelectorAll(".card")[2]);
//
// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute("lang"));
// console.log(document.querySelector(".link-web").href);
// console.log(document.querySelector(".link-web").getAttribute("href"));
// document.documentElement.lang = "de";
// document.documentElement.setAttribute("lang", "es");
//
// const $linkWeb = document.querySelector(".link-web");
// $linkWeb.setAttribute("target", "_blank");
// $linkWeb.setAttribute("rel", "noopener");
// // $linkWeb.setAttribute("href", "https://www.google.com");
// console.log($linkWeb.hasAttribute("rel"));
// $linkWeb.removeAttribute("rel");
// console.log($linkWeb.hasAttribute("rel"));
//
// // Data atrributes : getAttribute, setAttribute, dataset
//
// console.log($linkWeb.getAttribute("data-description"));
// console.log($linkWeb.dataset);
// console.log($linkWeb.dataset.description);
// $linkWeb.setAttribute("data-description", "Modelo de objeto del documento");
// console.log($linkWeb.dataset.description);
// $linkWeb.dataset.description = "Aprende desarrollo web";
// console.log($linkWeb.dataset.description);
// console.log($linkWeb.hasAttribute("data-description"));
// $linkWeb.removeAttribute("data-description");
// console.log($linkWeb.hasAttribute("data-description"));
//
//
