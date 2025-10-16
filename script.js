const myLibrary = [];
const container = document.querySelector(".container");
const dialog = document.querySelector(".dialog");
const addBookBtn = document.querySelector(".addBook");
addBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must call this constructor with the new operator");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

function addBookToLibrary(title, author, pages, readStatus) {
  const newBook = new Book(title, author, pages, readStatus);
  myLibrary.push(newBook);
  return newBook;
}

function displayBookToPage() {
  for (const element of myLibrary) {
    const book = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const readStatus = document.createElement("p");

    title.textContent = element.title;
    author.textContent = element.author;
    pages.textContent = element.pages;
    readStatus.textContent = element.read;

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(readStatus);
    book.classList.add("book");
    container.appendChild(book);
  }
}
