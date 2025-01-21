document.addEventListener("DOMContentLoaded", () => {
  refreshDisplay(myLibrary);
});

const myLibrary = [];

/**
 * Represents a book in a library.
 */
class Book {
  /**
   * Creates a new Book instance.
   * @param {String} title - Title of the book
   * @param {String} author - Author of the book
   * @param {Number} pages - The number of pages in the book
   * @param {Boolean} read - The read status of the book
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
 * Creates an instance of a Book object
 * @param {String} title - Title of the book
 * @param {String} author - Author of the book
 * @param {Number} pages - Amount of pages of the book
 * @returns A new book object
 */
function createBook(title, author, pages) {
  return new Book(title, author, pages);
}

/**
 * 
 * @param {Book} book - Book to add to the library
 */
function addBookToLibrary(book) {
  myLibrary.push(book);

  refreshDisplay(myLibrary);
}

/**
 * Creates a card container to hold all the data of the Book object in p elements.
 * @param {String} title - Title of the Book object
 * @param {String} author - Author of the Book object
 * @param {Number} pages - Author of the Book object
 * @returns A div with elements holding book data as a children; a card
 */
function createCard(title, author, pages) {
  const newCard = document.createElement('div');
  newCard.classList.add('card');

  // Card content
  const bookTitle = document.createElement('p');
  bookTitle.classList.add('book-title');
  bookTitle.textContent = title;

  const bookAuthor = document.createElement('p');
  bookAuthor.classList.add('book-author');
  bookAuthor.textContent = author;

  const bookPages = document.createElement('p');
  bookPages.classList.add('book-pages');
  bookPages.textContent = pages;

  const readButton = document.createElement('button');
  readButton.classList.add('book-read-btn');
  readButton.setAttribute('onclick', 'onClickRead()'); // Need to do something here
  readButton.textContent = 'read.';

  newCard.appendChild(bookTitle);
  newCard.appendChild(bookAuthor);
  newCard.appendChild(bookPages);
  newCard.appendChild(readButton);

  return newCard;
}

/**
 * Displays all of the Book objects in the library array.
 * @param {Array} array - Array holding all the Book objects
 */
function refreshDisplay(array) {
  const displayContainer = document.getElementById('main');

  displayContainer.innerHTML = '';

  array.forEach(book => {
    const newCard = createCard(book.title, book.author, book.pages);
    displayContainer.appendChild(newCard);
  });
}

const test1 = createBook('gf', 'f', 23);
addBookToLibrary(test1);
const test2 = createBook('gf', 'f', 23);
addBookToLibrary(test2);
const test3 = createBook('gf', 'f', 23);
addBookToLibrary(test3);
const test4 = createBook('gf', 'f', 23);
addBookToLibrary(test4);
const test5 = createBook('gf', 'f', 23);
addBookToLibrary(test5);
