import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,

} from "react-native";
import Style from "../Style";
import { saveemployeedetail } from "../Action/action";
import { connect } from "react-redux";


class Homescreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:"",
      schoolname:"",
      salary:""
    }
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#F0FFFF" }}>
        <Text style={Style.TextStyle}>Enter Employee Details</Text>
        <View style={{ padding: 20, marginTop:80 }}>
          <Text style={{ fontWeight: "500", fontSize: 20, color: "#2F69AC", marginLeft:100 }}>
            Enter Your Name
          </Text>
         
          <TextInput
            style={Style.feild}
            placeholder="Enter Your Name" onChangeText={name => {
              this.setState({ name: name }, () => {
              })}}
          ></TextInput>

          <Text style={{ fontWeight: "500", fontSize: 20, color: "#2F69AC", marginLeft:70 }}>
            Enter Your School Name
          </Text>
     
          <TextInput
            style={Style.feild}
            placeholder="Enter Your School Name" onChangeText={schoolname => {
              this.setState({ schoolname: schoolname }, () => {
              })}}
          ></TextInput>

          <Text style={{ fontWeight: "500", fontSize: 20, color: "#2F69AC", marginLeft:100 }}>
            Enter Your Salary
          </Text>
        
          <TextInput
            style={Style.feild}
            placeholder="Enter Your Roll Salary" onChangeText={salary => {
              this.setState({ salary: salary }, () => {
              })}}
          ></TextInput>

          <Button title="submit"
          onPress={()=> {
            let employeedetails = {};
            employeedetails.name = this.state.name;
            employeedetails.schoolname = this.state.schoolname;
            employeedetails.salary = this.state.salary;
           

            this.props.reduxsaveemployeedetail(employeedetails)
            this.props.navigation.navigate("Showemployeedetail")
          }}
          
          
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reduxsaveemployeedetail:(employeedetails) => 
    dispatch(saveemployeedetail(employeedetails))
  }
}

export default connect(null,mapDispatchToProps)(Homescreen);
