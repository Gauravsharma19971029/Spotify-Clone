import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
      alignItems:"center",
      padding:20
  },
  creatorContainer: {
    
      flexDirection:"row",
      margin:10
      
  },
  image: {
      width:150,
      height:150,
      margin:15
  },
  name: {
      color:"white",
      fontSize:30,
      fontWeight:"bold"
  },
  creator:{
    color:"lightgray",
    margin:5,
    fontSize:16
  },
  likes:{
    color:"lightgray",
    margin:5,
    fontSize:16
  },
  button: {
      backgroundColor:"#1CD05D",
      height:50,
      width:175,
      borderRadius:50,
      justifyContent:"center",
      alignItems:"center"
  },
  buttonText:{
    color:"white",
    fontSize:20,
    fontWeight:"bold"
  }
});

export default styles;
