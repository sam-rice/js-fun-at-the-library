class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  };

  greetPatron(name, morning) {
    if (morning === true) {
      return `Good morning, ${name}!`
    } else {
      return `Hello, ${name}!`
    };
  };

  findBook(title) {
   for (var i = 0; i < this.library.shelves.fantasy.length; i++) {
    if (this.library.shelves.fantasy[i].title === title) {
      this.library.shelves.fantasy.splice(i, 1);
      return `Yes, we have ${title}`;
    };
  };
    return `Sorry, we do not have ${title}`
  };

  calculateLateFee(days) {
    return Math.ceil(days * .25);
  };
};

function addBook(library, book) {
  title: book
};

module.exports = Librarian;
  {
  addBook
  };

