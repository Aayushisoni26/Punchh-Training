
import React from "react";
import ReactDOM from "react-dom";
import el from "./App";
import Student from "./Student";
import NewStudent from "./NewStudent";

//JSX
ReactDOM.render(el, document.getElementById("root"))

//Props
ReactDOM.render(<Student Name = "Aayushi" Roll="18BCON368"/>, document.getElementById("root1") );

//Props - Class based component
ReactDOM.render(<Student Roll="18BCON456"/>, document.getElementById("root2") );

//Children in JSX
ReactDOM.render(<Student />, document.getElementById("root3") );

//State
ReactDOM.render(<Student />, document.getElementById("root4") );

//Event Handling
ReactDOM.render(<NewStudent roll="101"/>, document.getElementById("root5") );
