import React from "react";
import ReactDOM from "react-dom";

const groot = ReactDOM.createRoot(document.getElementById("groot"));

const parent = React.createElement("div", { id: "parent" }, [
React.createElement("div", { id: "child1" }, [
React.createElement("h1", { id: "parent" }, "I am h1 tag"),
React.createElement("h2", { id: "parent" }, "I am h2 tag"),
]),
React.createElement("div", { id: "child2" }, [
React.createElement("h1", { id: "parent" }, "I am h1 tag"),
React.createElement("h2", { id: "parent" }, "I am h2 tag"),
]),
]);

groot.render(parent);

React.createElement("tags",{attributes},"inner html")
