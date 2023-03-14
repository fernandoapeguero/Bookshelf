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

const bookshelf = document.querySelector(".bookshelf");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const container = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = formData.get("name");

  const author = document.createElement("p");
  author.textContent = formData.get("author");

  container.appendChild(title);
  container.appendChild(author);

  container.setAttribute("class", "book");

  bookshelf.appendChild(container);

  console.log(formData.name);
});

// checkbox

var checkbox = document.getElementById("myCheckbox");

checkbox.addEventListener("click", function () {
  this.checked = !this.checked;
  console.log("checking");
});
