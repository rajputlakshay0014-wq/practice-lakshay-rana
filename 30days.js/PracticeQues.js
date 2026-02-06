// Mutating Input 
// function pass as an arguments 
// return function as a result;
// function assign as a variable ;
let add = function(a,b){
    return a+b;
}
console.log(add(2,4));
// return function as a result ;
function square(factor){
    return function(num){
        return num* factor;
    }
}
// function pass as an arguments;
function mutliplyNumber(fn,num1,num2){
    return fn(num1,num2);
}
// here am starting the phase of the higher order functions and the how can we use functions in the term of the higher order function;
/*Q1.

Given an array of numbers, return a new array where each number is squared using map.

Q2.

You are given an array of prices.
Return a new array where 18% GST is added to each price.

Q3.

Given an array of strings, return a new array where each string is converted to uppercase.

Q4. (Kalvium-style)

Given an array of objects:

[{name: "A", age: 20}, {name: "B", age: 25}]


Return a new array containing only the names.*/
let numbers =[1,2,3,4,5,];
let squaredNumbers = numbers.map(num =>num*num);
console.log(squaredNumbers);

let prices = [23,45,89,49,90];
let gstaddPrice = prices.map(price => price + (price * 0.18));
console.log(gstaddPrice);
let strings = ["a","b"];
let uppercaseStrings = strings.map(str=>str.toUpperCase());
console.log(uppercaseStrings);
let peoples = [{name:"A",age:20},{name:"B",age:25}];
let names = peoples.map(person=>person.name);
console.log(names);