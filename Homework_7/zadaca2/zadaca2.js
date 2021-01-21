let book = new Object();

book.title = prompt("Enter the title for book");
book.author = prompt("Enter the author for book");
book.readBook = prompt("Enter the reading status for book", "true or false");
book.readingStatus = function() {
    if (book.readBook == "true") {
        return console.log(`Already read ${this.title} by ${this.author}.`);
    } else if (book.readBook == "false") {
        return console.log(`You still need to read ${this.title} by ${this.author}.`);
    } else {
        return console.log("You entered the wrong status for whether you read the book. You must enter correct form");
    }
}

book.readingStatus();