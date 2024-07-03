export default function initAccordion() {
  console.log("jfvjfhjf");
}

console.log("está funcionando");

const accordionDt = document.querySelectorAll("[data-accordion] dt");
function callback() {
  this.classList.toggle("ativo");
  this.nextElementSibling.classList.toggle("ativo");
}

accordionDt.forEach((item) => {
  item.addEventListener("click", callback);
});
// export default function initAccordion() {
//   const accordionLista = document.querySelectorAll(
//     "[data-menu='accordion'] dt"
//   );
//   accordionLista[0].classList.add("ativo");
//   accordionLista[0].nextElementSibling.classList.add("ativo");

//   function activeAccordion() {
//     this.classList.toggle("ativo");
//     this.nextElementSibling.classList.toggle("ativo");
//   }

//   accordionLista.forEach((item) => {
//     item.addEventListener("click", activeAccordion);
//   });
// }
