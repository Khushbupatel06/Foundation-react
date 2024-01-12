/**
 * <div id="parent">
        <div id="child1">
            <h1>I AM H1!</h1>
            <h2>I AM H2!</h2>    
        </div>
        <div id="child2">
            <h1>I AM H1!</h1>
            <h2>I AM H2!</h2>    
        </div>

    </div>
    two create two children we need to create array of children [h1, h2]
    ReactElement is an (object) => HTML(Browser Understands)
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {}, "I AM H1!"), 
        React.createElement("h2", {}, "I AM H2!"),
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "I AM H1!"), 
        React.createElement("h2", {}, "I AM H2!"),
    ]),
]);

console.log(parent);

root.render(parent);

// const heading = React.createElement(
//     "h1", 
//     {id: "tital", xyz: "abc"},
//     "Hello Everyone from React!"
// );

// console.log(heading); // object

// root.render(heading);



//JSX