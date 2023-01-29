import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";






function Register(props) {
  

  return (
    <View style={styles.container}>
        <View style = {{flex :3,alignItems:'center',justifyContent : 'center'}}>
            <Image 
            source = {require('../assets/images/WhatsApp_Image_2022-10-25_at_8.09.13_PM.jpeg')}
            style= {[styles.image,{flex : 6}]}
            />
            <View style ={{alignItems : 'center',justifyContent : 'center',width:'100%',flex :1,paddingBottom: 10}}>
                <Text style={styles.loremIpsum2}>Enter your mobile number</Text>
                <Text style={styles.loremIpsum3}>We will send you an OTP to verify.</Text>
            </View>
        </View>
        <View style = {[{flex : 1,justifyContent : 'center'},styles.rect]}>
            <View style = {{flexDirection : 'row'}}>
                <TextInput
                    placeholder="+91"
                    textBreakStrategy="highQuality"
                    style={[styles.textInput]}
                />
                <TextInput
                    placeholder=""
                    textBreakStrategy="highQuality"
                    style={[styles.mobileNumber]}
                />
            </View>
            <View style={{flex : 1,alignItems: 'center'}}>
                
                <TouchableOpacity
                onPress={()=>props.navigation.navigate("Otp")}
                style={styles.button}>
                
                    <Text style={styles.loremIpsum}>Continue</Text>
                
                </TouchableOpacity>
            </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: '60%',
    backgroundColor: "#03bf68",
    borderRadius: 5,
    marginTop : 10,
    marginLeft: 10,
    alignItems : 'center'
    
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
    fontWeight : 'bold'
  },
  loremIpsum3: {
    // fontFamily: "roboto-regular",
    color: "rgba(156,154,154,1)",
    // marginLeft: 83
  }
});

export default Register;
