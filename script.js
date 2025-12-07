const v = 64
console.log(v)

//basics
console.log("Hello World");
console.error("error")
console.warn("warning")

// take input from users (browser)
const l = window.prompt("type something")
console.log(l)

//var
var x = "hello"
x = "hello again"

//let
let y=4

//const(cannot change later)
const z=5

/* let and const are block scoped

if(true){
    let a=5
}
console.log(a)

in this case the value of a remains only in the if block and shows error when tried to print
*/


/* var is function scoped

if(true){
    let a=5
}
console.log(a)

in this case the value of a remains only in the if block and shows error when tried to print
*/

function test(){
    console.log(x)
    var x = "hello"
    console.log(x)
}

test()

/* here we do not get error even after calling x before it is initialized
because with var all of these are variables are hoisted to the top of function
which means once they are declared they will be there at the begining of function even without value yet

this will not happen with let
*/

//arithmetic operators

console.log(3+2)
console.log(3-2)
console.log(3*2)
console.log(3/2)
console.log(3%2)

const a=6
const b="7"

console.log(a+b) //here the answer will be 67

const m=6
const n=true

console.log(m+n) //here the answer will be 7 and for false it will be 6
//javascript applies this type conversion automatically

const mm="2345"
const nn= 2

console.log(Number(mm)+nn) //here the answer will be 2347 

/* DOM is used to access html elements which are visible on the screen
Document Object Model

*/

document.getElementById('click').click()
document.getElementById('click').styleborder="blue"