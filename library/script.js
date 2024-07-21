let library = [];

const bookDialog = document.getElementById("book-dialog");
const newBook = document.getElementById("new-book");
const confirmBtn = bookDialog.querySelector("#confirmBtn");
const submitButton = document.getElementById("submit-button");


function Book(title, author, pages, read=false){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookId = `book${++Book.id}`;
    this.info = () => {
        if (this.read === false){
            var bookRead = "not read.";
        }
        else{
            var bookRead = "already read.";
        }
        return (this.title + " by " + this.author + ", " + this.pages + " pages, " + bookRead);
    }
}

Book.id = 0;

function addBookToLibrary(title, author, pages, read, library){
    const book = new Book(title, author, pages, read);
    library.push(book);
    displayBooks(library);
}

function displayBooks(list){
    var booklist = document.getElementById("book-list");
    booklist.innerHTML = "";
    list.forEach((book) => createHTMLBook(book, booklist));
}

function createHTMLBook(book, list) {
    var listItem = document.createElement("li");
    listItem.classList.add('book');
    listItem.classList.add(`${library.bookId}`);

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type="checkbox";
    checkbox.id="book-read-checkbox";
    checkbox.name="book-read-checkbox";

    var bookText = document.createTextNode(book.info());

    label.appendChild(checkbox);

    listItem.appendChild(bookText);
    listItem.appendChild(label);

    const remBtn = document.createElement('button');
    listItem.appendChild(remBtn);
    remBtn.textContent = 'Remove';
    // remBtn.onclick = removeBook();

    list.appendChild(listItem);
    
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

