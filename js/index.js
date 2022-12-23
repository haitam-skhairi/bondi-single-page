// JavaScript File

let featCashed = document.querySelectorAll(".features .feat-cashed");
let featMore = document.querySelector(".features .feat-more");

// console.log(featCashed);

featMore.addEventListener("click", function () {
  featCashed.forEach((el) => {
    el.classList.toggle("feat-block");
  });
});
