const library = [];


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read)
    }
}

function addBookToLibrary(book, library){

}


const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
console.log(book1.info());