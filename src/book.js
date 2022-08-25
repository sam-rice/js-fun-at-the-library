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
  }
}


//   if (newReview !== reviews) {
//   reviews.push(newReview);
//   }
// };



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
