spread operator-The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
handling events-HTML events are "things" that happen to HTML elements.
When JavaScript is used in HTML pages, JavaScript can "react" on these events and handling of those events is known as handling events
Event- Description
onchange -An HTML element has been changed
onclick -The user clicks an HTML element
onmouseover- The user moves the mouse over an HTML element
onmouseout- The user moves the mouse away from an HTML element
onkeydown -The user pushes a keyboard key
onload -The browser has finished loading the page

Example-<button onclick="displayDate()">The time is?</button>
lexical scope-
Lexical scope, also known as static scope, is a fundamental concept in programming languages, including JavaScript. It refers to how variables are resolved and accessed based on their location in the source code during the compilation or parsing phase, rather than at runtime. Lexical scope determines the visibility and accessibility of variables and functions within a given block of code.
named imports-Named imports allows selectively import specific variables ,function,or objects from a module into your own code .We have to export the designated params from the module to import in different code.

asyncawait-We can amke any function async to make them wait for promises

an async function always returns a promise

await frezzes the call stack for a promise to get FULLFILLED
ITS JUST A ELEGEANT WAY TO GETTING THE PROMISE RESULT AND ITS EASIER TO READ AND WRITE

destructuring

<h1>map</h1>-maps all the values of an array to the different funtion
const arr = [5, 1, 2, 4, 8, 9, 5];

function double(x) {
return x \* 2;
}

function triple(x) {
return x \* 3;
}
function binary(x) {
return x.toString(2);
}

const output = arr.map(binary);
const output1 = arr.map(function binary(x) {
return x.toString(2);
});
const output2 = arr.map((x) => {
x.toString(2);
});
const output3 = arr.map((x) => x.toString(2));
const outputtriple = arr.map(triple);
const outputdouble = arr.map(double,index);
if you give 2nd parameter to map it will be index of map

console.log(output, outputtriple, outputdouble, output1, output2, output3);

filter-It filters the value of arrays based on the condition provided. boolean values
arr = [1, 5, 4, 9, 36, 3, 4, 9, 5, 4, 1, 2, 3, 9, 5, 6, 56, 56, 5, 6, 24, 85];

function even(x) {
return x % 2 === 0;
}

const evenno = arr.filter(even);
console.log(evenno);

reduce-Reduce function has got nothing to do with its name.Reduce is a function that iterates over all the values in a array to give a single result.

//const output=arr.reduce(function(accumulator,current){})
const outputlowestnumber = arr.reduce(function (acc, curr) {
if (curr < acc) {
acc = curr;
}
return acc;
}, arr[0]);

console.log(outputlowestnumber);

promises

Promises are used to handle async operations in JS MDN docs
promise gening to avoid call back hell
always return data to apromise while chaining the promises

Promise is a object that represents eventual completion or failure of a async operation in js

callback

A callback function is a function that is passed as an argument to another function, to be “called back” at a later time inside the function.
scopes
working with objects
asynchronus javascript

optional chaining
higher order function

Event loop-It checks the callback queue,micro task queue and the call stack to see if there is anything to execute and pushes the function in call stack.Event will start executing the codes only when the call stack of JS engine is empty.

Micro task queue-fetch promises are queued in micro task queue it is also handled by event loop,Micro task queue has higher priority. all the callback functions that comes through promises and mutation observer will come to Micro task queue

<h1>CSS</h1>
1.FlexBox
2.Flex Properties

Web Apis-Not part of JS Window-Global object
Set Timeout()
Dom APis
fetch()-fetch goes and request a api
local storage
console
location
