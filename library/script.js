const library = [];

const bookDialog = document.getElementById("book-dialog");
const newBook = document.getElementById("new-book");
const confirmBtn = bookDialog.querySelector("#confirmBtn");
const submitButton = document.getElementById("submit-button");

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.bookId = `book${++Book.id}`;
  this.info = () => {
    if (this.read === false) {
      var bookRead = "not read.";
    } else {
      var bookRead = "already read.";
    }
    return (
      this.title +
      " by " +
      this.author +
      ", " +
      this.pages +
      " pages, " +
      bookRead
    );
  };
}

Book.id = 0;

function addBookToLibrary(title, author, pages, read, library) {
  const book = new Book(title, author, pages, read);
  library.push(book);
  displayBooks(library);
}

function displayBooks(list) {
  var booklist = document.getElementById("book-list");
  booklist.innerHTML = "";
  list.forEach((book) => createHTMLBook(book, booklist));
  console.log(list);
}

function createHTMLBook(book, list) {
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "book-read-checkbox";
  checkbox.name = "book-read-checkbox";
  checkbox.addEventListener("click", (e) => toggleRead(e, book));

  var remBtn = document.createElement("button");
  remBtn.textContent = "Remove";
  remBtn.addEventListener("click", (e) => removeBook(e, book));

  var label = document.createElement("label");
  label.appendChild(checkbox);

  var listItem = document.createElement("li");
  var bookText = document.createTextNode(book.info());

  listItem.appendChild(bookText);
  listItem.appendChild(label);
  listItem.appendChild(remBtn);

  list.appendChild(listItem);
}

function removeBook(e, book) {
  library.splice(library.indexOf(book), 1);
  displayBooks(library);
}

function toggleRead(e, book) {
  library[library.indexOf(book)]["read"] =
    !library[library.indexOf(book)]["read"];
  displayBooks(library);
}

newBook.addEventListener("click", () => {
  bookDialog.showModal();
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.getElementById("book-title").value;
  const author = document.getElementById("book-author").value;
  const pages = +document.getElementById("book-pages").value;
  const read = document.getElementById("book-read").checked;

  addBookToLibrary(title, author, pages, read, library);

  document.getElementById("submission-form").reset();
  bookDialog.close();
});
