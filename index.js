document.addEventListener("DOMContentLoaded", () => {
  displayBooks(myLibrary);
  openModal();
  closeModalListener();
  addBook();
  removeBook();
});

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);

  const mainContainer = document.getElementById("main");
  mainContainer.innerHTML = '';

  displayBooks(myLibrary);
}

function displayBooks(arr) {
  const mainContainer = document.getElementById("main");

  arr.forEach((book, index) => {
    const newCard = document.createElement("div");
    newCard.classList.add("card");

    newCard.setAttribute('data-index', index);

    let bookRead;
    if (book.read) {
      bookRead = "checked";
    }
    else {
      bookRead = "";
    }

    // create and add book properties to the card text display
    newCard.innerHTML = 
    `
      <button id="remove-card-btn">remove.</button>
      <h1 class="book-title">${book.title}</h1>
      <p class="book-author">author. ${book.author}</p>
      <p class="book-pages">pages. ${book.pages}</p>
      <div class="book-status">
        <label for="read" >read.</label>
        <input class="book-read" type="checkbox" id="read" name="read" ${bookRead}></input>
      </div>
    `;

    // add card to the main container
    mainContainer.appendChild(newCard);
  });
}

function openModal() {
  const addBtn = document.getElementById("btn-add");
  const modal = document.getElementById("modal");
  
  addBtn.addEventListener("click", () => {
    resetModalInputs();
    modal.showModal();
    modal.classList.add("modal-show");
  });
}

function closeModal(modal) {
  modal.close();
  modal.classList.remove("modal-show");
}

function closeModalListener() {
  const modal = document.getElementById("modal");
  const modalExitBtn = document.getElementById("close-modal-btn");
  const errorMessage = document.getElementById("error-message");

  modalExitBtn.addEventListener("click", () => {
    errorMessage.style.display = "none";
    closeModal(modal);
  });
}

function addBook() {
  const addBookBtn = document.getElementById("modal-submit");
  const modal = document.getElementById("modal");

  addBookBtn.addEventListener('click', () => {
    const bookTitle = document.getElementById("modal-title").value;
    const bookAuthor = document.getElementById("modal-author").value;
    const bookPages = document.getElementById("modal-pages").value;
    const bookRead = document.getElementById("modal-read").checked;

    const errorMessage = document.getElementById("error-message");

    if (!bookTitle || !bookAuthor || !bookPages) {
      errorMessage.style.display = "block";
      return;
    }

    errorMessage.style.display = "none";
    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    addBookToLibrary(newBook);
    
    displayBooks([newBook]);
    closeModal(modal);
  });
}

function removeBook() {
  const mainContainer = document.getElementById("main");

  mainContainer.addEventListener("click", (e) => {
    if (e.target.id === "remove-card-btn") {
      const card = e.target.parentElement;

      const index = card.getAttribute('data-index');

      removeBookFromLibrary(index);
    }
  });
}

function resetModalInputs() {
  document.getElementById("modal-title").value = '';
  document.getElementById("modal-author").value = '';
  document.getElementById("modal-pages").value = '';
  document.getElementById("modal-read").checked = false;
}