// Array to store books
const myLibrary = [];

// Book constructor
function Book(title, author, genre, yearPublished, pages) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.yearPublished = yearPublished;
  this.pages = pages;

  this.getBookInfo = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages ~ ${this.genre}, published in ${this.yearPublished}.`;
  };
}

function addBookToLibrary(title, author, genre, yearPublished, pages) {
  const newBook = new Book(title, author, genre, yearPublished, pages);
  myLibrary.push(newBook);
  return newBook;
}

// Adding books to the array
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "Fiction", 1960, 281);
addBookToLibrary("1984", "George Orwell", "Dystopian", 1949, 328);
addBookToLibrary("Pride and Prejudice", "Jane Austen", "Romance", 1813, 279);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 1925, 180);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", "Fiction", 1951, 277);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "Fantasy", 1997, 309)


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
    `;

    // Append the card to the container
    container.appendChild(card);
  });
}

// Call the function
displayBooks();