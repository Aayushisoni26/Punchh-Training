import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Homescreen from "./Homescreen";
import Showemployeedetail from "./Showemployeedetail";


const AppNavigator = createStackNavigator(
{
  employeedetails:{
    screen:Homescreen,
    navigationOptions:{
        headerShown:false,
    }
},
  Showemployeedetail:{
    screen:Showemployeedetail,
    navigationOptions:{
        headerShown:false,
    }
  },
}
);


export default createAppContainer(AppNavigator);