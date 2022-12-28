import React, { Component } from 'react'
import User from './User';

export default class App extends Component {
    constructor(){
        super();
        this.state = {color:"red", deleteUser: true }
        console.log("constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps")
        //return {color:props.color}
        return{}
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true;
        
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("getSnapshotBeforeUpdate", prevState.color )
        return {}
    }

    componentDidMount(){
        this.setState({color:"green"})
        console.log("componentDidMount")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }


  render() {
    console.log("render", this.state.color)
    return (

      <div>
        <p>Hi {this.state.color}</p>
        {this.state.deleteUser && <User/>}
        <button onClick={()=>{this.setState({deleteUser: false})}}></button>
      </div>
    )
  }
}
