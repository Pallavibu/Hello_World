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
// const heading = (
//   <h1 className="heading" tabIndex="1">
//     Pallavi is here
//   </h1>
// );

//console.log(JSXheading);
//React Component
//Types of Components

//Normal javascript variable
const Title = (
  <h1 className="heading" tabIndex="1">
    Pallavi is here
  </h1>
);

//React Functional Component
const Title1 = () => (
  <h1 className="heading" tabIndex="1">
    Pallavi is here
  </h1>
);

const number = 100;

const HeadingComponent = () => (
  <div id="container">
    <h1>{200 + 100}</h1>
    {number}
    {Title}

    
    <Title1 />
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//rendering react elements
//root.render(heading);

// rendering react components
root.render(<HeadingComponent />);
