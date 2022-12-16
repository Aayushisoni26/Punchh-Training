import React , {Component} from "react";
//import PropTypes from "prop-types";

/*const Student = props => {
    return (
        <div>
            <h1>Name: {props.Name}</h1>
            <h2>Roll: {props.Roll}</h2>
        </div>
    );
}; 


//Class based component
class Student extends Component{
    render(){
        return (
            <div>
            <h1>Name: {this.props.Name}</h1>
            <h2>Roll: {this.props.Roll}</h2>
        </div>
        )
    }
}


//checking prop type
Student.propTypes = {
    Name: PropTypes.string

}

Student.defaultProps = {
    name: "raw"
};



//Children in JSX - Functional component
const Student = props => {
    return <h1>I am a child</h1>
}


//State
class Student extends Component{
    state = {
        name: "Lakshita"
    };
    render() {
        return (
            <h1> Hello, {this.state.name} </h1>
        );
    }
}
*/


//State:  using constructor
class Student extends Component{
    constructor(props) {
        super(props);
        this.state = {
        name: "Aayushi"
    };
}
    render() {
        return (
            <h1> Hello, {this.state.name} </h1>
        );
    }
}



export default Student;