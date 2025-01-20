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
 * 
 * @param {Book} book - Book to add to the library
 */
function addBookToLibrary(book) {
  myLibrary.push(book);
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

  newCard.innerHTML = 
  `
    <p class="book-title">${title}</p>
    <p class="book-author">${author}</p>
    <p class="book-pages">${pages}</p>
    <button class="book-read-btn">Read</button>
  `;

  return newCard;
}

const test = document.getElementById('main');
const card = createCard("hello", "htoo", 25);
test.appendChild(card);
