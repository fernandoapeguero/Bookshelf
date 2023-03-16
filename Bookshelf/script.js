const books = [];
let bookCount = 0;

//  Hides Modal
const modal = document.querySelector(".form_container");

modal.addEventListener("click", (e) => {
  if (e.target == modal && e.target.tagName !== "INPUT") {
    modal.style.visibility = "hidden";
  }
});

// Shows Modal on button click

const showModal = document.querySelector(".btn");

showModal.addEventListener("click", (e) => {
  if (modal.style.visibility === "" || modal.style.visibility === "hidden") {
    modal.style.visibility = "visible";
  } else {
    modal.style.visibility = "hidden";
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
  const pages = formData.get("pages").trim();

  console.log(formData);

  if (
    name === "" ||
    name.length < 3 ||
    author === "" ||
    author.length < 3 ||
    pages.length === 0
  ) {
    return;
  }

  document.querySelector("#name").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#read").checked = false;

  bookCount++;

  books.push({
    id: bookCount,
    title: formData.get("name"),
    author: formData.get("author"),
    pages: formData.get("pages"),
    read: formData.get("read"),
  });

  displayBooks();
});

// Display Books

const displayBooks = () => {
  bookshelf.innerHTML = "";

  document.querySelector(".book_count").textContent = ` ${bookCount}`;

  books.map((book, i) => {
    bookshelf.innerHTML += `<div class="card">
      <h3>Name: ${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? "Yes" : "No"}</p>
    </div>`;
  });
};
