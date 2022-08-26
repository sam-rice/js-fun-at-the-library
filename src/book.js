function createTitle(title) {
  return "The " + title;
};

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  };
};

function saveReview(newReview, reviews) {
  if (reviews.indexOf(newReview) === -1) {
    reviews.push(newReview);
  };
};

function calculatePageCount(title) {
  return title.length * 20;
};

function writeBook(bookTitle, bookCharacter, genre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  };
};

function editBook(book) {
  return book.pageCount = (book.pageCount / 4) * 3;
};


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
};
