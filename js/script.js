const button = document.querySelector(".button");
const popup = document.querySelector(".form-show");
button.addEventListener("click", function () {
  popup.classList.toggle("form-show");
});
