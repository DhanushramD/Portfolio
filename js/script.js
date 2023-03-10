const overlay = document.querySelector('#overlay');

document.querySelector('#mybtn').addEventListener("click", () => {
  overlay.style.display = "block";
})

document.querySelector('#close').addEventListener("click", () => {
  overlay.style.display = "none";
})