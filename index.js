// Question 1 Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93 
const ages = [3,9,23,64,2,8,28,93];

//A. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
console.log(ages[ages.length - 1] - ages[0]);

//B. Add a new age to your array and repeat the step above to ensure it is dynamic. 
ages.push(25);
console.log(ages);
console.log(ages[ages.length - 1] - ages[0]);

//C. Use a loop to iterate through the array and calculate the average age. 
let sum = 0;

for(let i=0; i < ages.length; i++){
    sum += ages[i];
}
const averageAge = sum / ages.length;   

console.log(averageAge);

//Question 2 Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’
const names = ['Sam' ,'Tommy' ,'Tim' , 'Sally' ,'Buck' ,'Bob'];
console.log(names);

//2A. Use a loop to iterate through the array and calculate the average number of letters per name
let letterSum = 0;

for(let i=0; i < names.length; i++){
    letterSum += names[i].length; 
}
const averageNumberLetters = letterSum / names.length;
console.log(averageNumberLetters);

// 2B. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let addedSpace = ' ';

for(let i = 0; i < names.length; i++){
    addedSpace += names[i] + ' ';
}
console.log(addedSpace);

//Question 3. How do you access the last element of any array?

/* An array is made up of elements, to access an element use indices. The index is 0 based and continues until the last index.
Example:
        const ages[1,2,3,4,5];
        ages[4] will give you the last element because 4 is the last index.

        You may also use ages.length - 1 to access the last element. */
        
//Question 4. How do you access the first element of any array?

// Using the same example from Question 3: ages[0] will give you the first element because 0 is the start of the index. 

// Question 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
const nameLengths = [];

for(let i = 0; i < names.length; i++){
    nameLengths[i] = names[i].length;
}
console.log(nameLengths);

//Question 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let elementSum = 0;

for(let i = 0; i < nameLengths.length; i++){
    elementSum += nameLengths[i];
}
console.log(elementSum);

//Question 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
function repeatedWord (word, n){
    let repeatedWord = '';

    for(let i = 0; i < n; i++){
        repeatedWord += word;
    }
    return repeatedWord;
}
console.log(repeatedWord('hello', 4));

// Question 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. 
function fullName(firstName, lastName){
    
    return firstName + ' ' + lastName
}
console.log('Mark', 'Ponce');

//Question 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isItTrue (){
    if(sum > 100){
        return true;
    }
}
//Sum comes from the ages array from question 1. Since the sum of that array has been calculated, we can check to see if the sum is > 100.
console.log(isItTrue());

//Question 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function average (){
    return sum / ages.length;
}
// I am calculating the average of all elements from the ages array used from question 1. The average Age was found using a for loop in question 1C but this time we used a function to calculate the average.
console.log(average());

//Question 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array
const scorePoints = [1,2,3,4,5,6,7]

sumOfPoints = 0
for(let i = 0; i < scorePoints.length; i++){
    sumOfPoints += scorePoints[i];
}
const averagePointRange = sumOfPoints/ scorePoints.length;
//A second array with numbers was created above
function greaterAverage (array1, array2){
    if(array1 > array2){
        return true;
    }
}
console.log(greaterAverage(sum, averagePointRange));

//Question 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50
function willBuyDrink (){
    isHotOutside = true;
    moneyInPocket = 15;

    if((isHotOutside == true) && (moneyInPocket > 10.50)){
        return true;
    }
    else{
        return false;
    }
} 
console.log(willBuyDrink());

//Question 13. Create a function of your own that solves a problem
function getPercentage(dollars, percentage){
    return (dollars * percentage)/100;
}
let discount = getPercentage(100,20);

console.log(discount);
//The function gives you the percentage of any number. It is used to find what 20% off $100.