import { Component } from "react";
import {View, Text,SafeAreaView,StyleSheet} from "react-native";
import Style from "../Style";
import { connect } from "react-redux";

class Showemployeedetail extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#F0FFFF" }}>
                 <Text style={Style.TextStyle}>Show Employee Details</Text>

                 <View>
                 <Text style={{ fontWeight: "500", fontSize: 20, color: "#2F69AC", margin:20}}>Name: {this.props.employeedetails.name}</Text>
                 </View>

                 <View>
                 <Text style={{ fontWeight: "500", fontSize: 20, color: "#2F69AC", margin:20}}>School Name: {this.props.employeedetails.schoolname}</Text>

                 </View>
                
                <View>
                 <Text style={{ fontWeight: "500", fontSize: 20, color: "#2F69AC", margin:20}}>Salary: {this.props.employeedetails.salary}</Text>

                 </View>
            </View>
        )
    }
}


const mapStateToProps = state => {
    return {
        employeedetails: state.employeedetailreducer.employeedetails
    }
}

export default connect(mapStateToProps,null)(Showemployeedetail);