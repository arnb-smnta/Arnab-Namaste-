We can configure our own terminal command for a special terminal code by going to package.json and configuring the scripts.
We need to call npm run "our very own command" for running our own command
JSX and react are different JSX was built to make react developer life easier
JSX is not html inside javascript JSX is totally different than HTML JSX is a HTML like syntax
JS engine does not understand JSX Js engine only understand ES6 or other versions of echma script
Parcel transpiles the code before going to JS engine so that browsers can understands (Babel under Parcel does transpiling)
(babel transpiling jsx to react object)
JSX=> React.createElement=>ReactElement-JS object=>HTMLElement(Render)
JSX takes attribute only in camel case
HW -How to write different types of HTML attribute in JSX
It is required to wrap JSX in 1st brackets for multiple line HTML like code for babael to understand where the jsx is starting and ending.
React Components -Every thing is a component in React
1.class based components -old way of writting codes
2.Functional Component-New way of writting codes-Its a normal JS function that returns a JSX code

Rendering a functional component => root.render(<HeadingComponent/>)
Component composition-Compositing two component in one another writing one component into other component
const HeadingComponent = () => {
return (
<>
<TitleComponent />

<h1> inside React Functional Component</h1>;
</>
);
};

We can write JS code in JSX by writting it inside a curly braces{}
How to put react element inside jsx -We can do it by writting inside curly braces{React element}
We can also write component inside component using curly braces
JSX wont blindly runs code in Curly braces {} it sanatizes code before running on browser cross scripting hacking wont work on JSX
