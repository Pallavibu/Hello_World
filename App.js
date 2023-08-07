import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement (render)

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "Hello World in React"),
//     React.createElement("h2", {}, "Hello World in React2"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Hello World in React"),
//     React.createElement("h2", {}, "Hello World in React2"),
//   ]),
// ]);
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


// using React
// const heading = React.createElement("h1", {id : "idName"},"Pallavi id here")


//using JSX (HTML or XML like syntax)
const JSXheading = <h1>Pallavi is here</h1>
