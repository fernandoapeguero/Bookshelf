function logMessage() {
  console.log("Yeah this is nice");
}

// Shows Modal on button click

function showModal() {
  if (modal.style.display == "none") {
    modal.style.display = "grid";
  }
}

//  Hides Modal
const modal = document.querySelector(".form_container");

modal.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target == modal) {
    modal.style.display = "none";
  }
});
