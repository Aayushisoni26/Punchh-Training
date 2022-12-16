import React, {Component} from "react";

//Event Handling

//using class component
class NewStudent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            name: "Aayushi",
            roll: this.props.roll
        };
    }
    
    handleClick =(id, e) => {

        //this.setState({name: "Lakshita"});
       // this.setState({roll: "102"});
        //console.log("Button Clicked", this);
        console.log(id);
        console.log(e);
    }

    handleclickArg = e => {
       this.handleClick(this.state.id, e);
    };
    render(){
        return(
            <div>
                <h1>Hello Event Handling</h1>
                <h1>Hello, {this.state.name} Your Roll Number is {this.state.roll}</h1>
                <button onClick={this.handleclickArg}>Delete</button>
            </div>
        )
    }
}



/*using function component
function NewStudent(props){
    function handleClick(e){
        e.preventDefault();
        console.log("Button Clicked");
    }
    return(
    <div>
        <h2>Hello welcome to React JS</h2>
        <button onClick={handleClick}>Click Me</button>
    </div>
    )
}
*/
export default NewStudent;