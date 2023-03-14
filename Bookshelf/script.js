const books = [];
let bookCount = 0;

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

  const name = formData.get("name").trim();
  const author = formData.get("author").trim();

  if (name === "" || name.length < 3 || author === "" || author.length < 3)
    return;

  document.querySelector("#name").value = "";
  document.querySelector("#author").value = "";

  books.push({
    id: bookCount,
    title: formData.get("name"),
    author: formData.get("author"),
  });

  bookCount++;

  displayBooks();
});

// Display Books

const displayBooks = () => {
  bookshelf.innerHTML = "";

  books.map((book, i) => {
    bookshelf.innerHTML += `<div class="card">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
    </div>`;
  });
};

// checkbox

var checkbox = document.getElementById("myCheckbox");

checkbox.addEventListener("click", function () {
  this.checked = !this.checked;
  console.log("checking");
});
