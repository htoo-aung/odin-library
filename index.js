const myLibrary = []
const myLibrary2 = []

const modal = document.getElementById("modal");
const openBtn = document.getElementById("btn-add");
const closeBtn = document.getElementById("close-modal-btn");
const modalSubmitBtn = document.getElementById("modal-submit");

function Book(title, author, pages, read = false) {
  this.book_id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

function addBookToLibrary(library, title, author, pages, read = false) {
  const newBook = new Book(title, author, pages, read);
  library.push(newBook);
}

function createCard(title, author, pages, read) {
  const card = document.createElement('div');
  card.className = "card";

  const cardTitle = document.createElement('p');
  cardTitle.textContent = title;

  const cardAuthor = document.createElement('p');
  cardAuthor.textContent = author;

  const cardPages = document.createElement('p');
  cardPages.textContent = pages;

  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);

  return card;
}

/**
 * Take in any array with book objects to display different libraries
 * 
 * @param {*} libraryArr Array of book objects
 * @returns void
 */
function renderBooks(libraryArr) {
  if (libraryArr.length == 0) {
    return;
  }

  const main = document.getElementById('main');

  libraryArr.forEach(book => {
    const cardTitle = book.title;
    const cardAuthor = book.author;
    const cardPages = book.pages;
    const cardRead = book.read;

    const card = createCard(cardTitle, cardAuthor, cardPages, cardRead);
    main.appendChild(card);
  });
}

function openModal() {
  modal.showModal();
}

function closeModal() {
  modal.close();
}

function submitModal() {
  const modalTitle = document.getElementById('modal-title').value;
  const modalAuthor = document.getElementById('modal-author').value;
  const modalPages = document.getElementById('modal-pages').value;

  addBookToLibrary(myLibrary, modalTitle, modalAuthor, modalPages, false);
  closeModal();
  renderBooks(myLibrary);
}

function setupEventListeners() {
  openBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  modalSubmitBtn.addEventListener("click", submitModal);
}

setupEventListeners();
