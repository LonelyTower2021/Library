let myLibrary = [];

function Book(title, author, pages, haveRead=false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;

    this.info = function () {
        let readResponse = this.haveRead ? "Have Read" : "Have Not Read";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readResponse}`;
    }
}

function addBookToLibrary() {
    let title = prompt("Enter the Title of the Book");
    let author = prompt("Enter the Author of the Book");
    let pages = prompt("Enter the book's total number of pages");
    
    let read = prompt("Have you finished reading the book? (y/n)");
    let haveRead = read.toLowerCase() == 'y' ? true : false;

    myLibrary.push(new Book(title, author, pages, haveRead));
}

addBookToLibrary();
console.log(myLibrary);