import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
function Apptour(props) {
  return (
    <View style={styles.container}>
        <View style = {{flex : 1,alignItems:'center',justifyContent : 'center',marginTop : 20,}}>
            {/* <Image 
            source={require('../assets/images/inmakes-learning-hub-kazhakuttam-thiruvananthapuram-tally-training-institutes-52yebidxyg.webp')}
            style= {[styles.image,{flex : 4,borderWidth : 1,}]}
            /> */}
            <View style= {{flex: 4,width : '100%',alignItems : 'center',justifyContent : 'center'}}>
                <View style= {styles.imageContainer}>
                    <Image style = {{flex : 1,width : '100%',height : '100%',borderRadius : 10}} source = {require('../assets/images/Lights.jpg')}/>
                </View>
            </View>
            <View style ={{alignItems : 'center',width:'100%',paddingBottom: 10,flex :1.5}}>
                <Text style={styles.loremIpsum2}>App Tour Title</Text>
                <Text style={styles.loremIpsum3}>The app tour description goes here</Text>
                <View style ={{flex  : 1,width : '100%',alignItems : 'center', justifyContent : 'center'}}>
                  <View style= {{borderWidth : 1,width : 70,height : 70,borderRadius : 10,borderColor : 'grey',alignItems : 'center',justifyContent : 'center', marginTop :10, }}>
                      <TouchableOpacity style = {[styles.button]}
                      onPress = {()=> props.navigation.navigate("Home")}>
                          <View style = {{width : '100%',height : '100%',alignItems : 'center',justifyContent : 'center'}}>
                            <Ionicons name="arrow-forward" style = {styles.icon}/>

                          </View>

                      </TouchableOpacity>
                  </View>  
                </View>
            </View>
            
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "rgba(7,83,7,0)",
    // borderWidth: 1,
    borderColor: "#112059",
    borderRadius: 20,
    borderStyle: "dashed",
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
    width: '80%',
    height: '80%',
    backgroundColor: "#03bf68",
    borderRadius: 5, 
    alignItems : 'center',
    justifyContent : 'center',
    
  },
  loremIpsum: {
    // fontFamily: "roboto-regular",
    color: "rgba(243,240,240,1)",
    fontSize: 21,
    marginTop: 14,
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
  image: {
    width : '120%',
    height : '80%'
    

  },
  loremIpsum2: {
    // fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 22,
    fontWeight : 'bold',
    paddingTop : 25,
  },
  loremIpsum3: {
    // fontFamily: "roboto-regular",
    color: "rgba(156,154,154,1)",
    // marginLeft: 83
  },
  imageContainer : {
    width : '95%',
    height : '95%',
    borderRadius : 10,
    backgroundColor : 'lightgrey',
  },
  icon : {
    color : 'white',
    fontSize : 30
  }
});

export default Apptour;
