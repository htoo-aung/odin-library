const myLibrary = [];

/**
 * Represents a book in a library.
 */
class Book {
  /**
   * Creates a new Book instance.
   * @param {string} title - Title of the book
   * @param {string} author - Author of the book
   * @param {number} pages - The number of pages in the book
   * @param {boolean} read - The read status of the book
   */
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
  }

  /**
   * Toggles the read status of the book
   */
  toggleReadStatus() {
    this.read = !this.read;
  }
}

/**
 * 
 * @param {Book} book - Book to add to the library
 */
function addBookToLibrary(book) {
  myLibrary.push(book);
}
