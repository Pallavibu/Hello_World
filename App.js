import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Reactelement(JS Object) => when rendered converts to HTMLElement (render)

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
// console.log(heading)

//using JSX (HTML or XML like syntax)
//JSX (transpiled before it reaches the JS) - Parcel - Babel
//JSX => Bable transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

//React Element (Object)
const JSXheading = (
  <h1 className="heading" tabIndex="1">
    Pallavi is here
  </h1>
);

//console.log(JSXheading);
//React Component
//Types of Components

//React Functional Component
const HeadingComponent = () => {
  return <h1>Namaste React Functional Component</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(JSXheading);
