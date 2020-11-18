import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin:10
  },
  rightContainer: {
    
    alignContent:"center",
    margin:15
  },
  image: {
    height: 75,
    width: 75,
    flex: 0,
  },
  title: {
    color: "white",
    fontSize:18,
    fontWeight:"400"
  },
  artist: {
    color: "lightgray",
    fontSize:14,
    fontWeight:"400"
  },
});

export default styles;
