

//var temp = "Hello World"
// console.log(temp);
//temp= 100;


// let s1 =" Vikrant";
// let s2 = null;


// //console.log(s1 + s2);

// let a = 10;
// let b = 20;


// console.log(`The sum of ${a} and ${b} is ${a+b}`);

// //type coercion
// console.log(undefined-5);

// console.log("24" %5)


// let prompt = require('prompt-sync')()

// let age = Number(prompt("Enter your Age "));

// console.log("Your correct age is: " + (age+2))


// Swapping 2 variables via 3 methods


// method 1
let cont1 =100;
let cont2 =50;


 let temp =cont1   //temp =100

cont1 =cont2 // cont1 =50;

cont2 = temp // cont2 =100;

console.log(cont1)
console.log(cont2)


 //method 2

//  let a =20;
//  let b =10;

//  a =a+b;
//  b=a-b;
//  a=a-b;

//  console.log(a);
//  console.log(b);

//method 3 --> Destructing Assignement


let a1 =50;
let a2 =80;
console.log (a1,a2);

[a1,a2] = [a2,a1]

console.log(a1,a2)


// Understand operator 

console.log(Math.floor(22/3))

//Math.floor is always round down 

// Like

console.log(Math.floor(5.1))
console.log(Math.floor(5.9))
console.log(Math.floor(-5.1))

//Whereas tofixed is round up

console.log((4.567).toFixed(2)) 


console.log(45678/10)

// to get the last digit in a number use mod (%)

console.log(4578%10)

console.log(14<8 && 12>5 && 25>15)

console.log(14<8 || 12>5 || 25>15)

console.log(!(14<8 || 12>5 || 25>15))

//unary operator

//increment--> pre and post
//decrement --> pre and post

// Math function

//1 Math.abs() --> convert any negative number to positive
console.log(Math.abs(-45))

//2 Math.ceil()--> convert the float to grater value
console.log(Math.ceil(4.1))  //--> 5

//Math.floor()--> convert the float to smaller value fo=rom original
console.log(Math.floor(4.8)) //--> 4


//Math.round --> if value in decimal is greater or equal to 5 behave like ceil or less then 5 then behave like floor method
console.log(Math.round(10.4))

//Math. trunc()  --> remove the decimal value only
console.log(Math.trunc(45.89754511))

//Math.pow() --> power for number
console.log(Math.pow(5,5))

//Math.max  --> return the maximum value and input multiple no.
console.log(Math.max(45,78,99,140,45))

//Math.min --> return the minimum value and input multiple no.
console.log(Math.min(45,78,99,140,45,8))

//Math.random -> give value betwwen 0-1 
console.log(Math.random())

//Math.toFixed

let num =45.456;
console.log(num.toFixed(2))


// Question 1 p(1+r/100)^(t)-p

let prompt = require("prompt-sync")();

let p = prompt("Enter principle")
let r = prompt("Enter rate of Interest")
let t = prompt("Enter time ")


console.log(p*Math.pow((1+r/100),t)-p)


// Generate OTP

console.log("The Otp is: " + Math.trunc(Math.random()*10000))

//practice math method

