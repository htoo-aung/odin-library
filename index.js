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
  readButton.textContent = 'read.';

  newCard.appendChild(bookTitle);
  newCard.appendChild(bookAuthor);
  newCard.appendChild(bookPages);
  newCard.appendChild(readButton);

  return newCard;
}

function displayBooks(array) {
  if (array.length === 0) {
    return;
  }

  const displayContainer = document.getElementById('main');

  for (const book in array) {
    const bookTitle = book.title;
    const bookAuthor = book.author;
    const bookPages = book.pages;

    const newCard = createCard(bookTitle, bookAuthor, bookPages);
    displayContainer.appendChild(newCard);
  }
}
