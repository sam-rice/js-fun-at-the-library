function createLibrary(libraryName) {
  return {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };
};

function addBook(libraryName, book) {
  return libraryName.shelves[book.genre].unshift(book);
};

function checkoutBook(libraryName, title, genre) {
  for (var i = 0; i < libraryName.shelves[genre].length; i++) {
    if (title === libraryName.shelves[genre][i].title) {
      libraryName.shelves[genre].splice(i, 1);
      return `You have now checked out ${title} from the ${libraryName.name}`
    };
  }  return `Sorry, there are currently no copies of ${title} available at the ${libraryName.name}`;
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
