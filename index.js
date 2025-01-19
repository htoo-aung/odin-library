const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleReadStatus() {
    this.read = !this.read;
  }
}

/**
 * 
 * @param {Book} book 
 */
function addBookToLibrary(book) {
  myLibrary.push(book);
}
