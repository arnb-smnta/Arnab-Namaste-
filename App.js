import React from "react";
import ReactDOM from "react-dom/client";

//React Element

const jsxHeading = <h1 id="heading">React using jsx</h1>;
console.log(jsxHeading);
const TitleComponent = <h1>Title namaste react</h1>;
const HeadingComponent = () => {
  return (
    <>
      {TitleComponent}
      <h1> inside React Functional Component</h1>;
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("groot"));
root.render(<HeadingComponent />);
