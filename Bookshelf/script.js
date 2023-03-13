//  Hides Modal
const modal = document.querySelector(".form_container");

modal.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// Shows Modal on button click

const showModal = document.querySelector(".btn");

showModal.addEventListener("click", (e) => {
  e.preventDefault();

  if (modal.style.display === "" || modal.style.display === "none") {
    modal.style.display = "grid";
  } else {
    modal.style.display = "none";
  }
});

// Add book function

const form = document.querySelector(".form");

const btn = document.querySelector(".addBook");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  console.log(formData);
});

// checkbox

var checkbox = document.getElementById("myCheckbox");

checkbox.addEventListener("click", function () {
  this.checked = !this.checked;
  console.log("checking");
});
