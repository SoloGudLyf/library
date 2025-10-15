const myLibrary = []

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must call this constructor with the new operator");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

