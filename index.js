document.addEventListener("DOMContentLoaded", () => {
  displayBooks(myLibrary);
});

const book1 = new Book("hello", "h", 12);
const book2 = new Book("hello", "h", 12);
const book3 = new Book("hello", "h", 12);

const myLibrary = [book1, book2, book3];

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

    mainContainer.appendChild(newCard);
  });
}
