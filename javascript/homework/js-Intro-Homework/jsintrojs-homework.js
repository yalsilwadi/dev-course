// ## The Fortune Teller

var numOfChildren = 3;
var partnerName = "Aminah Zegar"
var city = "Dallas"
var jobTitle = "SDET"

console.log("You will be a " + jobTitle + " in " + city + ", and married to " + partnerName + " with " + numOfChildren + " Kids");

// ## The Age Calculator

var birthYear = 1996;
var futureYear = 2040;

var age = futureYear - birthYear;

console.log("I will be either " + (age-1) + " or " + age + " in " + futureYear);

// ## The Lifetime Supply Calculator

var currentAge = 27;
var maxAge = 93;
var amountPerDay = 2;
var numOfYear = maxAge - currentAge;
var daysPerYear = 365

console.log("You will need " + (amountPerDay*daysPerYear*numOfYear) + " to last you until the rupe old age of " + maxAge)

// ## The Geometrizer

var radius = 9;
pi = Math.PI;
var circumference = 2*pi*radius;
var areaOfCircle = pi * radius * radius;

console.log("The circumference is " + circumference);
console.log("The area is " + areaOfCircle);

// ## The Temperature Converter

var tempCelc = 25;
var calcFahrenheit = tempCelc * 9 / 5 + 32;;
var tempFahr = 77;
var calcCel = (5/9) * (tempFahr - 32);

console.log (tempCelc + ' celcius is ' + calcFahrenheit + " in fahrenheit")
console.log (tempFahr + ' fahrenheit is ' + calcCel + " in celcius")