const myLibrary = [];
const container = document.querySelector(".container");
const dialog = document.querySelector(".dialog");
const addBookBtn = document.querySelector(".addBook");
const createBookBtn = document.querySelector(".createBook");
const cancel = document.querySelector(".cancel");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const author = document.querySelector("#author");

cancel.addEventListener("click", function () {
  title.value = "";
  author.value = "";
  pages.value = "";
});

// Check book clicked and then delete from myLibrary
container.addEventListener("click", function (e) {
  myLibrary.map((element, id) => {
    if (element.id === e.target.dataset.id) {
      myLibrary.splice(id, 1);
    }
  });
  displayBookToPage();
});

// Create book
createBookBtn.addEventListener("click", function () {
  if (
    title.value.trim() === "" ||
    pages.value.trim() === "" ||
    author.value.trim() === ""
  ) {
    alert("Input can not be empty");
    return;
  }
  let readStatus = document.querySelector("#true").checked
    ? "Read"
    : "Not Read Yet";
  addBookToLibrary(
    title.value,
    author.value,
    pages.value,
    readStatus,
    crypto.randomUUID()
  );
  displayBookToPage();
  title.value = "";
  author.value = "";
  pages.value = "";
});

addBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

// Book Object constructor
function Book(title, author, pages, read, id) {
  if (!new.target) {
    throw Error("You must call this constructor with the new operator");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

Book.prototype.info = function () {
  return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

function addBookToLibrary(title, author, pages, readStatus, id) {
  const newBook = new Book(title, author, pages, readStatus, id);
  myLibrary.push(newBook);
  return newBook;
}

function displayBookToPage() {
  container.innerHTML = "";
  for (const element of myLibrary) {
    const book = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const readStatus = document.createElement("p");
    const deleteBTn = document.createElement("button");

    title.textContent = element.title;
    author.textContent = `Author: ${element.author}`;
    pages.textContent = `Number of Pages: ${element.pages}`;
    readStatus.textContent = `Read Status: ${element.read}`;
    deleteBTn.textContent = "Delete";

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(readStatus);
    book.appendChild(deleteBTn);
    book.classList.add("book");
    deleteBTn.dataset.id = element.id;
    container.appendChild(book);
  }
}
