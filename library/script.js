const library = [];

const bookDialog = document.getElementById("book-dialog");
const newBook = document.getElementById("new-book");
const confirmBtn = bookDialog.querySelector("#confirmBtn");
const submitButton = document.getElementById("submit-button")

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read)
    }
}

function addBookToLibrary(){

}

function displayBooks(list){

}

newBook.addEventListener("click", () => {
    bookDialog.showModal();
});

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.getElementById("book-title");
    const author = document.getElementById("book-author");
    const pages = document.getElementById("book-pages");
    dialog.close();
});



const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
console.log(book1.info());