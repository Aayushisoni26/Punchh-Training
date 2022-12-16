import React, { Component } from "react";
import Parent from "./Parent.js";
import { Student } from "./Student.js";

const el=React.createElement("h3",null,"Hello World");
class App extends Component{
    render(){
        return (<>
            <h1>Using Javascript XML - JSX</h1>
            <h3>Hello Aayushi Soni</h3>
            <h1>Using Create React Element</h1>
            {el}
            <h1> Class Component </h1>
            <Parent name = "Aayushi Soni" />
            <h1>Functional Component</h1>
            <Student name = "Aayushi Soni" />
            <Student name = "Aayushi" />
            <Student />
        </>
        )

    }
}
export default App;
