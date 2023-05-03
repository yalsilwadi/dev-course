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
    {"title" : "To Kill a Mockingbird", "author" : "Harper Lee","alreadyRead": true},
    {"title" : "Pride and Prejudice", "author" : "Jane Austen","alreadyRead": false},
    {"title" : "Lord of the Flies", "author" : "William Golding","alreadyRead": true}
]

