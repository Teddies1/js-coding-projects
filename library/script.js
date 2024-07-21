let library = [];

const bookDialog = document.getElementById("book-dialog");
const newBook = document.getElementById("new-book");
const confirmBtn = bookDialog.querySelector("#confirmBtn");
const submitButton = document.getElementById("submit-button")

function Book(title, author, pages, read=false){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read)
    }
}

function addBookToLibrary(title, author, pages, library){
    const book = new Book(title, author, pages);
    library.push(book);
    console.log(library);
    displayBooks(library);
}

function displayBooks(list){
    var booklist = document.getElementById("book-list");
    
    list.forEach((book) => {
        var listItem = document.createElement("li");
        var bookText = document.createTextNode(book.info());
        listItem.appendChild(bookText);
        booklist.appendChild(listItem);
    });
}

newBook.addEventListener("click", () => {
    bookDialog.showModal();
});

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const pages = +document.getElementById("book-pages").value;

    
    addBookToLibrary(title, author, pages, library);
    
    dialog.close();
});



// const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
// const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
// const book3 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
// const book4 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
// const book5 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

// booklist = [book1, book2, book3, book4, book5];
// displayBooks(booklist);
