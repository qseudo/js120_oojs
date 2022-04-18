class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    Book.titles.push(this.title);
  }

  static titles = [];

  static allTitles = function() {
    return Book.titles;
  }

  read() {
    console.log(`Reading ${this.title}`);
  }
}

let book1 = new Book('hi');
let book2 = new Book('bye');

console.log(Book.allTitles());