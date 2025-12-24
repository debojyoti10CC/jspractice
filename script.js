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
//hehe
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

DOM has 4 pillars
1.selection of an element
2. changing html
3. changing css
4. event listener
*/

//1
var aa=document.querySelector("h1")
console.log(aa)

//2
var aa=document.querySelector("h1")
aa.innerHTML ="changed html"

//3
var aa=document.querySelector("h1")
aa.style.color="red"

//4
var aa=document.querySelector("h1")
aa.addEventListener("click",function(){
    console.log("clicked")
})

var bulb=document.querySelector("#bulb")
var on=document.querySelector("#on")
var flag=0


on.addEventListener("click",function(){
    if(flag==0){
        bulb.style.backgroundColor="red"
        console.log("clicked")
        flag=1
        
    }
    else{
         bulb.style.backgroundColor="yellow"
        console.log(" again clicked")
        flag=0
    }
})


//selecting multiple elements at single time
var h=document.querySelector("h1") 
console.log(h) //this only selects the first h1

var h=document.querySelectorAll("h1") 
console.log(h) //this selects all h1
h.forEach(function(e){
    console.log(e)
})
//hehe
//hehe
//inorder to select using id
var h=document.querySelector("h1")
console.log(h)

//inorder to select by class
document.getElementsByClassName("container")

//inorder to select by tag
document.getElementsByTagName("h1")
