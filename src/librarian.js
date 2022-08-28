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
   var allShelves = this.library.shelves.fantasy.concat(this.library.shelves.nonFiction, this.library.shelves.fiction);

    for (var i = 0; i < allShelves.length; i++) {
    if (allShelves[i].title === title) {
     var targetShelf = this.library.shelves[allShelves[i].genre]; 

     for (var i = 0; i < targetShelf.length; i++) {
      if (targetShelf[i].title === title) {
        targetShelf.splice(i, 1);
        return `Yes, we have ${title}`;
      };
     };
    };
    return `Sorry, we do not have ${title}`
    };
  };



// SAVED BELOW
//   findBook(title) {
//     for (var i = 0; i < this.library.shelves.fantasy.length; i++) {
//      if (this.library.shelves.fantasy[i].title === title) {
//        this.library.shelves.fantasy.splice(i, 1);
//        return `Yes, we have ${title}`;
//      };
//    };
//      return `Sorry, we do not have ${title}`
//    };

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

