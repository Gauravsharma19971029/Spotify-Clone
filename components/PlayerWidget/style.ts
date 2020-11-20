import { StyleSheet } from "react-native";
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    position:"absolute",
    bottom:37,
    backgroundColor:"#131313",
    margin:10,
    width:"100%",
    borderWidth:1,
    borderColor:"black", 
  },
  rightContainer: {
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  iconsContainer:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    width:100,
    marginRight:10
    
  },
  nameContainer:{
    flexDirection:"row",
    alignItems:"center"
  },
  row:{
    flexDirection:"row"
  },
  image: {
    height: 75,
    width: 75,
    flex: 0,
    marginRight:10
  },
  title: {
    color: "white",
    fontSize:18,
    fontWeight:"bold",
    margin:10
  },
  artist: {
    color: "lightgray",
    fontSize:18,
    fontWeight:"400"
  },
  progress:{
    height:3,
    width:"100%",
    backgroundColor:"#bcbcbc"
  }
});

export default styles;
