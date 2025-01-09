document.addEventListener("DOMContentLoaded", () => {
  displayBooks(myLibrary);
  addBook();
  closeModal();
});

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(arr) {
  const mainContainer = document.getElementById("main");

  arr.forEach((book) => {
    const newCard = document.createElement("div");
    newCard.classList.add("card");

    // create and add book properties to the card text display
    newCard.innerHTML = 
    `
      <h1 class="book-title">${book.title}</h1>
      <p class="book-author">author. ${book.author}</p>
      <p class="book-pages">pages. ${book.pages}</p>
      <div class="book-status">
        <label for="read" >read.</label>
        <input class="book-read" type="checkbox" id="read" name="read">
      </div>
    `;

    // add card to the main container
    mainContainer.appendChild(newCard);
  });
}

function readBook() {

}

function addBook() {
  const addBtn = document.getElementById("btn-add");
  const modal = document.getElementById("modal");
  console.log("clicked");
  
  addBtn.addEventListener("click", () => {
    modal.showModal();
    modal.classList.add("modal-show");
  });
}

function closeModal() {
  const modal = document.getElementById("modal");
  const modalExitBtn = document.getElementById("close-modal-btn");

  modalExitBtn.addEventListener("click", () => {
    modal.close();
    modal.classList.remove("modal-show");
  });
}
