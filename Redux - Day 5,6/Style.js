import { StyleSheet } from "react-native";
const COLORS = {primary: "#1f145c", white: "#fff"};
const Style = StyleSheet.create({
    container: {
      flex: 1, 
    },

    icon1style: {
        marginLeft:240,
        width:30,
        marginTop:10,
       
        
        
    },
    icon2style: {
      marginLeft:240,
        width:30,
        marginBottom:11,
        
       
    },

    iconstyle: {
      marginLeft:60,
      
    },

    hairline: {
      backgroundColor: '#5EA9E8',
      height: 1,
      width: 1000,
      marginTop:10,

    },

    flatlistcontainer: {
      paddingTop:10,
      paddingLeft:15,
      backgroundColor:COLORS.white,
      flexDirection: "column",
      borderRadius:12,
      marginVertical:10,
      width:405
    
      
    },

    data1style: {
      fontWeight: "bold", 
      fontSize:18,
      backgroundColor:COLORS.white,
      
    },

    data2style: {
      fontSize:15, 
      color:"#1A5AA3", 
      fontStyle:"italic", 
      fontWeight: "600",
      backgroundColor:COLORS.white,
      width:100
      
      
    },
    data3style : {
      fontSize:15,
      backgroundColor:COLORS.white,
      color:"#40464C",
      fontWeight: "400",
      width:180
      

    },
    data4style: {
      fontSize:15,
      backgroundColor:COLORS.white,
      color:"#40464C",
      fontWeight: "400",
      width:230,
      height:20
    },
    ButtonStyle: {
      backgroundColor:'#E3E8EE',
      borderRadius:12,
      marginBottom: 8,
      width:68,
      height:23

    },
   
    TextStyle:{
        color:'#2F69AC',
        fontWeight:"bold",
        marginLeft:40,
        fontSize:30,
        padding:10,
        marginTop:30
        
    },
    feild : {
      borderColor: "#2F69AC",
      borderWidth: 2,
      borderRadius : 40,
      paddingLeft:20,
    
      margin:20
  }
    
    
  });

  export default Style;