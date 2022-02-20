//my human age number
let myAge = 29;
//the first two years of dogs life count as 10.5 dogs year each
let earlyYears = 2;
earlyYears *= 10.5;
//the first two years are accounted above, so now we are subtracting them form original age
let laterYears = myAge - 2;
//each year that follows counts as 4 dog years
laterYears *= 4;
//checking the results
console.log(earlyYears, laterYears);
//adding together early years and later in one variable
const myAgeInDogYears = earlyYears + laterYears;
//my name writen as a string will be all lowercased
const myName = "Kristina".toLowerCase();
//with string template literals we can print out a string with values from given variables
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
