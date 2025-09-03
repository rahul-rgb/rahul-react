const parent = React.createElement("div", {id: "parent"}, [
     React.createElement("div", {id: "child"}, 
    [React.createElement("h1", {id: "heading"}, "welcome react!"), React.createElement("h2", {id: "heading"}, "welcome react!")]
    ),  React.createElement("div", {id: "child2"}, 
    [React.createElement("h1", {id: "heading"}, "welcome react!"), React.createElement("h2", {id: "heading"}, "welcome react!")]
    )
]
)

const heading = React.createElement("h1", {id: "heading"}, "welcome react!")
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent);