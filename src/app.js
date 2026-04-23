import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from "./components/Body";


// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   [
//     React.createElement(
//       "div",
//       { id: "child", key: "child-1" },
//       [
//         React.createElement("h1", { key: "h1-1" }, "welcome reactt!"),
//         React.createElement("h2", { key: "h2-1" }, "welcome react!"),
//       ]
//     ),
//     React.createElement(
//       "div",
//       { id: "child2", key: "child-2" },
//       [
//         React.createElement("h1", { key: "h1-2" }, "welcome react!"),
//         React.createElement("h2", { key: "h2-2" }, "welcome react!"),
//       ]
//     ),
//   ]
// );

// const ele = <span>react element</span>
// // jsx example 
// const Heading = (<h1 className="head">{ele} jsx element</h1>)

// // functional component
// const Title = () =>(
//     <h1 className="title">Namaste React</h1>
// );

// // component composition
// const name = "rahul"
// const HeadingComponent = () =>(
//     <div id="container">
//         {Title()}
//         <Title />
//         {Heading}
//         <h2>{name}</h2>  // this is javascript inside jsx
//         {100 +200}  // this is javascript inside jsx
//         <h2>this is functional component</h2>
//     </div>
// )

const Applayout = () =>{
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
