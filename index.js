// The following section handles the dialog form
const openDialogButton = document.querySelector("#newBook");
const dialog = document.querySelector("#dialogBox");
const closeDialogbutton = document.querySelector("#closeDialog");
const bookForm = document.querySelector("#bookForm");

// Open the dialog when the button is clicked
openDialogButton.addEventListener('click', () => {
  dialog.showModal(); // Opens the dialog as a modal
});

// Close the dialog when the close button is clicked
closeDialogbutton.addEventListener('click', () => {
  dialog.close(); // closes the dialog
});

// Array to store books
const myLibrary = [];

// Book constructor
function Book(title, author, genre, yearPublished, pages, isRead) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.yearPublished = yearPublished;
  this.pages = pages;
  this.read = isRead;

  this.getBookInfo = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages ~ ${this.genre}, published in ${this.yearPublished}, book read ${this.read}.`;
  };
}

function addBookToLibrary(title, author, genre, yearPublished, pages, read) {
  const newBook = new Book(title, author, genre, yearPublished, pages, read);
  myLibrary.push(newBook);
  return newBook;
}

// Adding books to the array
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "Fiction", 1960, 281, "No");
addBookToLibrary("1984", "George Orwell", "Dystopian", 1949, 328, "No");
addBookToLibrary("Pride and Prejudice", "Jane Austen", "Romance", 1813, 279, "No");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 1925, 180, "No");
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", "Fiction", 1951, 277, "No");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "Fantasy", 1997, 309, "No")


function displayBooks() {
  // Select the book container
  const container = document.querySelector("#bookContainer");

  // Loop through the books array
  myLibrary.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Add the book details to the card
    card.innerHTML = `
    <h3>${book.title}</h3>
    <p><strong>Author:</strong> ${book.author}</p>
    <p><strong>Genre:</strong> ${book.genre}</p>
    <p><strong>Year:</strong> ${book.yearPublished}</p>
    <p><strong>Pages:</strong> ${book.pages}</p>
    <p><strong>Read?:</stron> ${book.read}</p>
    `;

    // Append the card to the container
    container.appendChild(card);
  });
}

// Call the function
displayBooks();

// Handle form submission
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const genre = document.getElementById("genre").value;
  const yearPublished = document.getElementById("yearPublished").value;
  const read = document.getElementById("read").checked;

  // Add the book to the library array 
  const newBook = addBookToLibrary(title, author, genre, yearPublished, pages, read);

  // Select the book container 
  const container = document.querySelector("#bookContainer");

  // Create a new card for the added book
  const card = document.createElement("div");
  card.classList.add("card");

  // Add the book details to the card
  card.innerHTML = `
  <h3>${newBook.title}</h3>
  <p><strong>Author:</strong> ${newBook.author}</p>
  <p><strong>Genre:</strong> ${newBook.genre}</p>
  <p><strong>Year:</strong> ${newBook.yearPublished}</p>
  <p><strong>Pages:</strong> ${newBook.pages}</p>
  <p><strong>Read?:</stron> ${newBook.read}</p>
  `;

  // Append the card to the container
  container.appendChild(card);

  // Clear the form and close dialog
  bookForm.reset();
  dialog.close();
});



