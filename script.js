const mainContainer = document.getElementById("main-container");
const rateBtns = document.getElementsByClassName("rate");
const activeBtns = document.getElementsByClassName("active");
const submitBtn = document.getElementById("submit");
const subContainer = document.getElementById("sub-container");
const selected = document.querySelector(".selected");

for (let i = 0; i < rateBtns.length; i++) {
  rateBtns[i].addEventListener("click", function () {
    activeBtns[0].className = activeBtns[0].className.replace(" active", "");
    this.className += " active";
  });
}
submitBtn.addEventListener("click", function () {
  for (let i = 0; i < rateBtns.length; i++) {
    if (rateBtns[i].classList.contains("active")) {
      selected.innerHTML = `You selected ${i + 1} out of 5`;
      mainContainer.style.display = "none";
      subContainer.style.display = "block";
    }
  }
});
