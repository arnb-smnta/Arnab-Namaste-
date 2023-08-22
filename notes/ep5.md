React Hooks

Src for source code

components folder for all the componenets

React file structure-Blog

To imprt named import we need to write it between two curly braces

For multiple exports we need to to use named imports

Q.can i use a default export with named import?
No ,We cant use default export and named export together , if we have multiple export we have to use named export but if we have single export we can use that as a named export also.

React hooks part 2
We will have a top rated buttons for our app

greater than 4 stars

USe state is a raect hook
React hook is a normal JS function given to us by react

useeffect()-important hooks

Use state()-superpowerful state variable
let reslist=[Default value];-Declaring a normal variable

const [reslist]=useState([defaultvalue]);-declaring a state variable,Whenever a state varable updates react rerenders the components

Reconcilliataion algorithm also known as react fibre

Virtual Dom of react -its not an actual dom,it is a representation of actual dom ,its a normal javascript object.

Diff algorithm-It finds out the difference between the current virtual dom and previous virtual dom after updating the state ,it will then update the dom .

Whenever the state calls the second function it triggers the diff algorith to make changes in the virtual dom.

Declaration of state varables are just array destructuring like normal js
