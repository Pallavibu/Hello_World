const parent = React.createElement(
    "div", 
    {id : "parent"}, 
    [
        React.createElement("div", {id : "child1"}, [
            React.createElement("h1", {}, "Hello World in React"), 
            React.createElement("h2", {}, "Hello World in React2")
        ]),
        React.createElement("div", {id : "child2"}, [
            React.createElement("h1", {}, "Hello World in React"), 
            React.createElement("h2", {}, "Hello World in React2")
        ])
    ]
    );

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);