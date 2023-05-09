

/*
====================TASK1====================
```js
Create a function that takes in a number as a parameter and returns the value of 
all the numbers from 1 to the number given.

Ex:
Input: 4
Output: 10

Input: 10
Output: 55

Input: 2001
Output: 2003001
```
*/

//WAY 1(BAD WAY)
const addAll1= (num) => {
    let sum = num;
    for(let i = 0; i < num; i++){
        sum += i;
    }
    return sum;
}

//WAY 2 (SMART WAY)
const addAll2= (num) => (((num + 1) * num) /2);

//Way 3 (COOL WAY)
function addAll3(num) {
    if (num > 1)  return num + addAll3(num - 1);
    return num;
}

console.log(addAll1(4))
console.log(addAll2(4))
console.log(addAll3(4));



/*
====================TASK2====================

```js
Write a function that takes in an array of numbers and outputs the average of all the numbers.

Ex:
Input: [ 1 , 4 , 7 ]
Output: 4

Input: [ 10, 5 ]
Output: 7.5

Input: [ 1.5, 3, 2.5, 1 ]
Output: 2
```

*/

//Way 1
const calculateAverage1 = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
  
//Way 2
const calculateAverage2 = (numbers) => (numbers.reduce((prev, cur) => prev + cur)) / numbers.length;
    


console.log(calculateAverage1([ 1.5, 3, 2.5, 1 ]));
console.log(calculateAverage2([ 1.5, 3, 2.5, 1 ]));

/*
====================TASK3====================
```js
Write a function that takes in an integer and returns it's largest binary gap. A binary gap is a positive number of 0's surrounded by 1's.  This will require you to convert the number to binary---this can be accomplished with num.toString(2)

Ex:
Input: 20, Output: 1
Input: 15, Output: 0
Input: 529, Ouput: 4
```
*/

function getLargestGap(number){
    let binaryArr = number.toString(2).split('')
    let zeroCounter = 0;
    let first1 = false;
    let binaryGap = 0;

    binaryArr.forEach(element => {
        if(element === '1' && first1 === false) first1 = true;
        else if(first1 === true && element === '0') zeroCounter++;
        else {
            binaryGap = Math.max(zeroCounter,binaryGap)
            zeroCounter = 0;
        }  
    });
    

    return binaryGap;
}

console.log(getLargestGap(15))

/*
====================TASK4====================
```js
Write a function that takes an array of numbers and a function as parameters. The function parameter should return true if the input meets a certain condition or false otherwise. Your function should run the function parameter on every element in the array parameter and , if it returns true, add the element to a new array. Return the new array.

Ex:

Input: [1,2,3]  function(num){return num === 2}
Output: [2]

Input: [1,2,3,4,5,6]  function(num){return num % 2 === 0}
Output: [2,4,6]

Input: [1,2,3,4,5,6]  function(num){return num > 3}
Output: [4,5,6]
```
*/

const arrayByCondition = (arr, conditionFunction) => {
    const newArr = [];
    for(let i = 0; i<arr.length;i++){
        if(conditionFunction(arr[i])) newArr.push(arr[i])
    }
    return newArr;
}
console.log(arrayByCondition([1,2,3,4], (num) => num % 2 === 0));


/*
====================BONUS1====================
```js
Write a function that takes in an array of integers and returns an array with duplicates removed

Ex:
Input: [1,2,2,3]
Output: [1,2,3]

Input: [4,5,4,4,7,5]
Output: [4,5,7]

Input: [1,2,3,5]
Output: [1,2,3,5]
```
*/

//Way 1
const removeDuplicates1 = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }
    return result;
}

const removeDuplicates2 = (arr) => {
    const result = [];

    arr.forEach(element => {if(!result.includes(element)) result.push(element);})
    return result;
}

//Way 3 -> Sets automatically remove duplicates 
const removeDuplicates3 = (arr) => Array.from(new Set(arr));


  console.log(removeDuplicates1([4,5,4,4,7,5]))
  console.log(removeDuplicates2([4,5,4,4,7,5]))
  console.log(removeDuplicates3([4,5,4,4,7,5]))

  /*
====================BONUS2====================
```js
Write a function that takes in a number and reverses the order of the digits.

Ex:
Input: 1234
Output:4321

Input: 1201
Output:1021

Input: 4
Output: 4

**Hint:** You can use `toString()` or `parseInt`
```
*/

const reverseNumber = (num) => Number(num.toString().split("").reverse().join().replaceAll(',',''));

console.log(reverseNumber(1234))