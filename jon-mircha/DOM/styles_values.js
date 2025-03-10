// const $card = document.querySelector(".card");
// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// $card.classList.add("opacity-80");
// console.log($card.classList.contains("opacity-80"));
// $card.classList.remove("opacity-80");
// $card.classList.toggle("opacity-80");
// $card.classList.toggle("opacity-80");
// $card.classList.toggle("opacity-80");
// $card.classList.replace("opacity-80", "opacity-60");
// $card.classList.add("sepia");
//
// ---------------------------------------------
//
// DOM - Text and HTML
//
//
// $paragrah = document.getElementById("paragrah");
// console.log($paragrah);
//
// let text = `
//   <p>
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     <span>Consectetur</span> adipisicing elit.
//   </p>
//   <p>
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     <i>Consectetur</i> adipisicing elit.
//   </p>
//   <p>
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     <b>Consectetur</b> adipisicing elit.
//   </p>
// `;

// $paragrah.innerText = text; // not render html tags in the text
// $paragrah.textContent = text; // not render html tags in the text but not respect the tags in the text  (not render the tags)
// $paragrah.innerHTML = text; // render html tags in the text
// $paragrah.outerHTML = text; // render html tags in the text and replace the element
//
// ---------------------------------------------
//
// DOM - Traversing the DOM (Recorriendo el DOM)
//

// const $cards = document.querySelector(".cards");
//
// console.log($cards);
// console.log($cards.children);
// console.log($cards.children[2]);
// console.log($cards.parentElement);
// console.log($cards.nextElementSibling);
// console.log($cards.firstChild);
// console.log($cards.firstElementChild);
// console.log($cards.lastChild);
// console.log($cards.lastElementChild);
// console.log($cards.previousSibling);
// console.log($cards.previousElementSibling);
// console.log($cards.closest("section"));
// console.log($cards.closest("main"));
// console.log($cards.children[3].closest("section"));

//
// ---------------------------------------------
//
// DOM - Creando Elementos y Fragmentos (Creating Elements and Fragments)
//
// elements is a tag html like div, p, h1, etc
// fragment is a container that store elements
// methods #1
// const $figure = document.createElement("figure");
// const $img = document.createElement("img");
// const $figcaption = document.createElement("figcaption");
// const $figcaptionText = document.createTextNode("Animals");
// const $cards = document.querySelector(".cards");
// const $figure2 = document.createElement("figure");
//
// $img.setAttribute("src", "https://picsum.photos/id/355/200/200 ");
// $img.setAttribute("alt", "Animals");
//
// $figure.classList.add("card");
// $figcaption.appendChild($figcaptionText);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);
// $cards.appendChild($figure);
//
// $figure2.innerHTML = `
//   <img src=" https://picsum.photos/id/55/200/200 " alt="Animals">
//   <figcaption>Animals</figcaption>
// `;
//
// $figure2.classList.add("card");
// $cards.appendChild($figure2);
// // methods #2
// document.write("<h3>Animals</h3>");
// const $list = document.createElement("ul");
// document.body.appendChild($list);
//
// const animals = ["Lion", "Elephant", "Dog", "Cat", "Bird", "Fish"];
// animals.forEach((animal) => {
//   const $li = document.createElement("li");
//   $li.textContent = animal;
//   $list.appendChild($li);
// });
//
// document.write("<h3>Continents of the world</h3>");
// const $list2 = document.createElement("ul");
// const continents = ["Africa", "America", "Asia", "Europe", "Oceania"];
// document.body.appendChild($list2);
// $list2.innerHTML = "";
// continents.forEach(
//   (continent) => ($list2.innerHTML += `<li>${continent}</li>`),
// );
// // methods #3
// const $list3 = document.createElement("ul");
// const $fragment = document.createDocumentFragment();
// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
// days.forEach((day) => {
//   const $li = document.createElement("li");
//   $li.textContent = day;
//   $fragment.appendChild($li);
// });
//
// document.write("<h3>Days of the week</h3>");
// $list3.appendChild($fragment);
// document.body.appendChild($list3);
//
// ---------------------------------------------
//
// DOM - Templates HTML

// const $cards = document.querySelector(".cards");
// const $template = document.getElementById("template-card").content;
// const $fragment = document.createDocumentFragment();
// const cardContent = [
//   {
//     title: "Technology",
//     img: "https://picsum.photos/id/100/200/200",
//   },
//   {
//     title: "Animals",
//     img: "https://picsum.photos/id/101/200/200",
//   },
//   {
//     title: "Architecture",
//     img: "https://picsum.photos/id/102/200/200",
//   },
//   {
//     title: "People",
//     img: "https://picsum.photos/id/103/200/200",
//   },
// ];
//
// cardContent.forEach((el) => {
//   $template.querySelector("img").setAttribute("src", el.img);
//   $template.querySelector("img").setAttribute("alt", el.title);
//   $template.querySelector("figcaption").textContent = el.title;
//
//   let $clone = document.importNode($template, true);
//   $fragment.appendChild($clone);
// });
// $cards.appendChild($fragment);
//
// ---------------------------------------------
//
// DOM - Modificando Elementos (Clonar y Eliminar Elementos)
//
//
// const $cards = document.querySelector(".cards");
// const $newCard = document.createElement("figure");
//
// $newCard.innerHTML = `
//   <img src="https://picsum.photos/id/104/200/200" alt="Technology">
//   <figcaption>Technology</figcaption>
// `;
//
// $newCard.classList.add("card");
// $cards.replaceChild($newCard, $cards.children[2]);
// $cards.removeChild($cards.lastElementChild);
// $cards.insertBefore($newCard, $cards.firstElementChild);
//
//
// DOM - Modificando Elementos II
//
// insertAdjacent...
// .insertAdjacentElement(position, element)
// .insertAdjacentHTML(position, html)
// .insertAdjacentText(position, text)
//
// position:
// beforebegin (hermano anterior)
// afterbegin (primer hijo)
// beforeend (ultimo hijo)
// afterend (hermano siguiente)
//
// const $cards = document.querySelector(".cards");
// const $newCard = document.createElement("figure");

// $newCard.innerHTML = `
//   <img src="https://picsum.photos/id/104/200/200" alt="Technology">
//   <figcaption>Technology</figcaption>
// `;

// let $contentCard = `
//   <img src="https://picsum.photos/id/104/200/200" alt="Technology">
//   <figcaption></figcaption>
// `;
//
// $newCard.insertAdjacentHTML("beforeend", $contentCard);
// $newCard
//   .querySelector("figcaption")
//   .insertAdjacentText("afterbegin", "Technology");
// $newCard.classList.add("card");
//
// // $cards.insertAdjacentElement("beforebegin", $newCard);
// // $cards.insertAdjacentElement("beforebegin", $newCard);
// //
// $cards.prepend($newCard);
// $cards.append($newCard);
// $cards.before($newCard);
// $cards.after($newCard);
//
// ---------------------------------------------
//
// DOM - Eventos en el DOM
//
//
// const $btnSemanticHandler = document.getElementById("btn-semantic-handler");
//
// function handlerClick() {
//   console.log("Click on the button");
//   console.log(event);
// }
//
// $btnSemanticHandler.onclick = handlerClick;
// $btnSemanticHandler.onclick = function (e) {
//   console.log("Click on the button 2");
//   console.log(e);
//   console.log(event);
// };
//
// const $btnMultipleEvents = document.getElementById("btn-multiple-events");
//
// // se pueden lanzar multiples eventos con addEventListener
// //
// $btnMultipleEvents.addEventListener("click", handlerClick);
// $btnMultipleEvents.addEventListener("click", (e) => {
//   console.log("Click on the button 2");
//   console.log(e);
//   console.log(event);
//   console.log(e.type);
// });

// ---------------------------------------------
//
// DOM - Eventos con Parámetros y Remover Eventos (Events with Parameters and Remove Events)

// const $divsEventos = document.querySelectorAll(".event-flow div");
// function flujoEventos(e) {
//   console.log(e);
//   console.log(
//     `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`,
//   );
// }
// console.log("this is the events divs: ", $divsEventos);
// $divsEventos.forEach((div) => {
//   div.addEventListener("click", flujoEventos);
//   div.addEventListener("click", flujoEventos, true);
// });

// ---------------------------------------------
//
// BOM - Methods

// window.alert("Alert");
// window.confirm("Confirm");
// window.prompt("Prompt");
//
//
const $btnOpen = document.getElementById("open-window");
const $btnClose = document.getElementById("close-window");
const $btnPrint = document.getElementById("print-window");

let ventana;

$btnOpen.addEventListener("click", (e) => {
  ventana = window.open("https://google.com");
});

$btnClose.addEventListener("click", (e) => {
  console.log(ventana);
  ventana.close();
});
