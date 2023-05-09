/* 
## The Recipe Card
Never forget another recipe!

- Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
- On separate lines (one console.log statement for each), log the recipe information so it looks like:
    - Mole
    - Serves: 2
    - Ingredients:
    - cinnamon
    - cumin
    - cocoa

*/

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

/* 
## The Reading List
Keep track of which books you read and which books you want to read!

- Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
- Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
- Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
*/

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

/* 
## Your top choices
- Create an array to hold your top choices (colors, presidents, whatever).
- For each choice, log to the screen a string like: "My #1 choice is blue."
- Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

*/

const topChoices = ["blue", "green", "red", "yellow"];

topChoices.forEach((choice, index) => {
  console.log(`My #${index + 1} choice is ${choice}.`);
});

/* 
## What number's bigger?
Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.
- Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").



*/

function greaterNum (num1, num2) {
  if (num1 > num2) {
      return num1;
  } else {
      return num2;
  }
}

console.log(greaterNum(5,25))
console.log(greaterNum(500,25))

/* 
## The World Translator
Write a function named helloWorld that:
- takes 1 argument, a language code (e.g. "es", "de", "en")
- returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
- Call that function for each of the supported languages and log the result to make sure it works.



*/

function helloWorld (lang) {

  if (lang == 'fr'){
    return 'Bonjour tout le monde'
  }
  else if (lang == 'es'){
    return 'Hola, Mundo'
  } else {
    return 'Hello, World';
  }
}

console.log(helloWorld('fr'))
console.log(helloWorld('es'))
console.log(helloWorld('gf'))

/* 
## The Grade Assigner
Write a function named assignGrade that:
- takes 1 argument, a number score.
- returns a grade for the score, either "A", "B", "C", "D", or "F".
- Call that function for a few different scores and log the result to make sure it works.

*/

function assignGrade (grade){
  if (grade >= 90){
    return 'A'
  } else if (grade >=80 && grade < 90) {
    return 'B'
  } else if (grade >=70 && grade < 80) {
    return 'C'
  } else if (grade >=60 && grade < 70) {
    return 'D'
  } else if (grade < 60) {
    return 'F'
  }
}

console.log(assignGrade(80))
console.log(assignGrade(94))
console.log(assignGrade(79))
console.log(assignGrade(59))

/* 
## The Pluralizer
Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".
- Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese".

*/

function pluralizer (word, numword) {
  if (numword > 1){
    return  `${numword} ${word + 's'}`
  } else {
    return `${numword} ${word}`
  }
}

console.log(pluralizer('cat', 5))
console.log(pluralizer('cat', 1))
console.log(pluralizer('frog', 5))
console.log(pluralizer('cow', 1))

/* 
## The Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?

- Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.

*/

function tellFortune(childNum, partName, location, jobTitle){
  return  `You will be a ${jobTitle} in ${location}, and married to ${partName} with ${childNum} kids`
}
console.log(tellFortune(2, 'Sarah', 'Chicago','SDET'));
console.log(tellFortune(4, 'Amal', 'California','QA'));
console.log(tellFortune(3, 'Aminah', 'Dallas','Software Dev'));


/* 
## The Puppy Age Calculator

You know how old your dog is in human years, but what about dog years? Calculate it!

- Write a function named calculateDogAge that:
  - takes 1 argument: your puppy's age.
  - calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
    outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
- Call the function three times with different sets of values.
- Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

/* 
## The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

- Write a function named calculateSupply that:
  - takes 2 arguments: age, amount per day.
  - calculates the amount consumed for rest of the life (based on a constant max age).
  - outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
- Call that function three times, passing in different values each time.
- Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/



/* 
## The Geometrizer

Create 2 functions that calculate properties of a circle, using the definitions here.

Create a function called calcCircumfrence:

- Pass the radius to the function.
- Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called calcArea:

- Pass the radius to the function.
- Calculate the area based on the radius, and output "The area is NN".

## The Temperature Converter

It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:

- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."


*/