// ## The Recipe Card

var favRecipe = {
    "title" : "Mole",
    "serving" : 2,
    "ingredients": ["cinnamon", "cumin", "cocoa"]
}

var recipeTitle = favRecipe.title;
var recipeServing = favRecipe.serving;
var recipeIngredients = favRecipe.ingredients;
console.log(recipeTitle)
console.log((`Serves: ${recipeServing}`))
recipeIngredients.forEach(ingredient => console.log(ingredient));

// ## The Reading List

var books = [
    {title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true},
    {title: "The Lord of the Rings", author: "J.R.R. Tolkien", alreadyRead: false},
    {title: "To Kill a Mockingbird", author: "Harper Lee", alreadyRead: true},
    {title: "1984", author: "George Orwell", alreadyRead: false}
  ];
  
  for (let book of books) {
    console.log(`${book.title} by ${book.author}`);
  
    if (book.alreadyRead) {
      console.log(`You already read "${book.title}" by ${book.author}`);
    } else {
      console.log(`You still need to read "${book.title}" by ${book.author}.`);
    }
  }

// ## Your top choices

const topChoices = ["blue", "green", "red", "yellow"];

topChoices.forEach((choice, index) => {
  console.log(`My #${index + 1} choice is ${choice}.`);
});