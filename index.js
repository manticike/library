// Array to store books
const myLibrary = [];

// Book constructor
function Book(title, author, genre, yearPublished, pages) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.yearPublished = yearPublished;
  this. pages = pages;

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

// Displaying the books
// console.log(myLibrary);

console.log(myLibrary[0].getBookInfo());