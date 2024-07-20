const library = [];

const bookDialog = document.getElementById("book-dialog");
const newBook = document.getElementById("new-book");
const confirmBtn = bookDialog.querySelector("#confirmBtn");

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read)
    }
}

function addBookToLibrary(library){

}

function displayBooks(list){

}

newBook.addEventListener("click", () => {
    bookDialog.showModal();
});

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
console.log(book1.info());