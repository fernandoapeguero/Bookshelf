const books = [];
let bookCount = 0;
let booksRead = 0;
let booksNotRead = 0;

let sort_direction = "ASC";
const error_message = document.querySelector(".error_message");

// Sorting

const sorting = document.querySelector("#select_sorting");

sorting.addEventListener("change", function () {
  sort_direction = this.value;

  console.log(sort_direction);

  displayBooks();
});

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
    error_message.style.display = "block";

    return;
  } else {
    error_message.style.display = "none";
  }

  // Clear values
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

  booksRead = 0;
  booksNotRead = 0;

  document.querySelector(".book_count").textContent = ` ${bookCount}`;

  let sort_function = (a, b) => a.title.localeCompare(b.title);

  if (sort_direction === "DESC") {
    sort_function = (a, b) => b.title.localeCompare(a.title);
  }

  books.sort(sort_function).map((book, i) => {
    if (book.read) {
      booksRead++;
    } else {
      booksNotRead++;
    }

    bookshelf.innerHTML += `<div class="card">
      <h3 class="card_title">Name: ${book.title}</h3>
      <p class="book_author">Author: ${book.author}</p>
      <p class="book_pages">Pages: ${book.pages}</p>
      <p class="book_read">Read: ${book.read ? "Yes" : "No"}</p>
    </div>`;
  });

  document.querySelector(".read").textContent = ` ${booksRead}`;
  document.querySelector(".not_read").textContent = ` ${booksNotRead}`;

  console.log;
};
