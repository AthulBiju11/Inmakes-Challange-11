import React, { cloneElement, Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
function ChapterTest(props) {
    

  return (
    <View style={styles.container}>
      <View style = {{alignItems : 'center',justifyContent : 'center',flex : 1}}>
        <Text style = {{fontSize : 25,fontWeight : 'bold'}}>ChapterTest</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "white",
    width : '100%',
    height : '100%'
  },
  rect: {
    backgroundColor: "#002232",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderStyle: "solid",
    borderTopLeftRadius : 25,
    borderTopRightRadius : 25,
  },
  textInput: {
    // fontFamily: "roboto-regular",
    color: "white",
    height: 60,
    width: 70,
    borderRadius: 5,
    backgroundColor: "#072f40",
    marginLeft : 25,
    marginTop : 25,
    paddingLeft : 20,
    fontSize : 15
    
    
  },
  textInput1: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    height: 60,
    width: 60,
    borderRadius: 9,
    backgroundColor: "#072f40",
    marginTop: 10,
    marginLeft : 20
  },
  textInput2: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    height: 60,
    width: 60,
    borderRadius: 9,
    backgroundColor: "#072f40",
    marginTop: 10,
    marginLeft : 10
  },
  mobileNumber: {
    // fontFamily: "roboto-regular",
    color: "white",
    height: 60,
    width: 255,
    borderRadius: 5,
    backgroundColor: "#072f40",
    marginLeft: 8,
    marginTop : 25,
    paddingLeft : 30,
    fontSize : 15
  },
  textInputRow: {
    height: 55,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 52,
    marginRight: 44
  },
  button: {
    width: '90%',
    height: '100%',
    backgroundColor: "#03bf68",
    borderRadius: 5,
    marginTop : 10,
    marginLeft: 6,
    alignItems : 'center'
    
  },
  loremIpsum: {
    // fontFamily: "roboto-regular",
    color: "rgba(243,240,240,1)",
    fontSize: 21,
    marginTop: 10,
  },
  rect2: {
    top: 225,
    left: 368,
    width: 8,
    height: 31,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  rectStack: {
    width: 376,
    height: 256,
    marginTop: 526,
    marginLeft: -8
  },
  image1: {
    width : '70%',
    height : '80%'
    

  },
  image2: {
    width : '100%',
    height : '100%'
    

  },
  loremIpsum2: {
    // fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 22,
    fontWeight : 'bold'
  },
  loremIpsum3: {
    // fontFamily: "roboto-regular",
    color: "rgba(156,154,154,1)",
    // marginLeft: 83
  },
});

export default ChapterTest;
