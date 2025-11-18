// const prompt = require("prompt-sync")();

// let a = prompt("Enter First No : ")
// let b = prompt("Enter Second No : ")

// let first_no = parseInt(a)
// let second_no = parseInt(b)

// let method = prompt("Enter Method : ")


//Operators

// if(method == "add"){
//     console.log(first_no + second_no)
// }
// else if(method == "sub"){
//     console.log(first_no - second_no)
// }
// else if(method == "multiple"){
//     console.log(first_no * second_no)
// }
// else if(method == "division"){
//     console.log(first_no / second_no)
// }
// else if(method == "exit"){
// }

/*Conditions 
if else conditions
if else if condiion*/

// if(isNaN(a)){
//     console.log("Is not a Number");
// }
// else if(first_no === 0) {
//     console.log("given no is 0");  
// }
// else if(first_no < 10){
//     console.log('Given Number is lesser than 10');
// }
// else if (first_no > 10) {
//     console.log("given number is greater than 10");   
// } 
// else{
//     console.log("give Proper no"); 
// }

//Ternary Operator

// console.log((first_no === 0) ? "lessthan 0" : "greater than 0");


let arr = [5,8,10,7,9,11]

console.log(arr.splice(3,3,17,19,111));


console.log(arr);

arr.unshift(100)
arr.splice(arr.length - 1,0,200)
console.log(arr)

let middle = Math.floor(arr.length / 2)

arr.splice(middle,0,0)

console.log(arr)