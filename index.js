const myLibrary = []
const myLibrary2 = []

const modal = document.getElementById("modal");
const openBtn = document.getElementById("btn-add");
const closeBtn = document.getElementById("close-modal-btn");
const modalSubmitBtn = document.getElementById("modal-submit");

const removeBookBtn = document.getElementById("remove-card-btn");

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

  if (read) {
    card.classList.add("card-read");
  }

  const cardTitle = document.createElement('p');
  cardTitle.textContent = title;

  const cardAuthor = document.createElement('p');
  cardAuthor.textContent = author;

  const cardPages = document.createElement('p');
  cardPages.textContent = pages;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = "remove.";
  removeBtn.className = "remove-card-btn";

  removeBtn.addEventListener("click", deleteCard);

  const readBtn = document.createElement('button');
  readBtn.textContent = "read.";
  readBtn.className = "book-read-btn";

  readBtn.addEventListener("click", readBook);

  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  card.appendChild(removeBtn);
  card.appendChild(readBtn);

  return card;
}

/**
 * Take in any array with book objects to display different libraries
 * 
 * @param {*} libraryArr Array of book objects
 * @returns void
 */
function renderBooks(libraryArr) {
  clearRender();

  const main = document.getElementById('main');

  libraryArr.forEach(book => {
    const cardTitle = book.title;
    const cardAuthor = book.author;
    const cardPages = book.pages;
    const cardRead = book.read;

    const card = createCard(cardTitle, cardAuthor, cardPages, cardRead);
    card.dataset.bookid = book.book_id;
    main.appendChild(card);
  });
}

function clearRender() {
  const main = document.getElementById('main');

  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
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
  clearInputs();
}

function deleteCard(event) {
  const parent = event.target.parentElement;
  const bookId = parent.dataset.bookid;
  
  myLibrary.splice(0, myLibrary.length, ...myLibrary.filter(book => bookId !== book.book_id));

  renderBooks(myLibrary);
}

function readBook(event) {
  const parent = event.target.parentElement;
  const bookId = parent.dataset.bookid;

  const chosenBook = myLibrary.find(book => bookId === book.book_id);
  chosenBook.read = !chosenBook.read;

  if (chosenBook.read) {
    parent.classList.add("card-read");
  }
  else {
    parent.classList.remove("card-read");
  }
}

function clearInputs() {
  const modalTitle = document.getElementById('modal-title');
  const modalAuthor = document.getElementById('modal-author');
  const modalPages = document.getElementById('modal-pages');

  modalTitle.value = "";
  modalAuthor.value = "";
  modalPages.value = "";
}

function setupEventListeners() {
  openBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  modalSubmitBtn.addEventListener("click", submitModal);
}

setupEventListeners();
