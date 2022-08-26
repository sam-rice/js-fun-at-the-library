function shelfBook(book, shelf) {
  if (shelf.length < 3) {
  return shelf.unshift(book);
  };
};

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (title === shelf[i].title) {
      return shelf.splice(i, 1);
    };
  };
};

function listTitles(shelf) {
  var titlesString = "";
  for (var i = 0; i < shelf.length; i++) {
    titlesString = titlesString + shelf[i].title + ", ";
  };
    return titlesString.slice(0, - 2);
};

function searchShelf(shelf, bookTitle) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      hasBook = true;
    } else {
      hasBook = false;
    }
  };
    return hasBook;
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
