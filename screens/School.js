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
import { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
function School(props) {
    const [selected,setSelected] = useState("");
  
  const data1 = [
    {key:'1',value:'CBSE'},
    {key:'2',value:'ICSE'},
    {key:'3',value:'State'},
    {key:'4',value:'Other'},

  ]
  const data2 = [
    {key:'1',value:'10'},
    {key:'2',value:'9'},
    {key:'3',value:'8'},
    {key:'4',value:'7'},

  ]

  return (
    <View style={styles.container}>
        <View style = {{flex :3,alignItems:'center',justifyContent : 'center'}}>
            
            <Image 
            source={require('../assets/images/inmakes-learning-hub-kazhakuttam-thiruvananthapuram-tally-training-institutes-52yebidxyg.webp')}
            style= {[styles.image1,{flex : 2}]}
            />
            <Image 
            source={require('../assets/images/WhatsApp_Image_2022-10-25_at_8.09.13_PM.jpeg')}
            style= {[styles.image2,{flex : 3}]}
            />
            <View style ={{alignItems : 'center',justifyContent : 'center',width:'100%',flex :0.8,}}>
                <Text style={styles.loremIpsum2}>Select Your School Board</Text>
            </View>
        </View>
        <View style = {[{flex :1.7,justifyContent : 'center'},styles.rect]}>
            
            <ScrollView style = {{flex : 2}}>
            <View style={{alignItems : 'center'}}>

                    <View style = {{width : '90%',marginTop : 20,marginLeft : 5}}>
                        <SelectList 
                        data = {data1}
                        setSelected = {setSelected}
                        placeholder = "Select Board"
                        arrowicon={<AntDesign style = {{color : 'white'}} name="down"/>}
                        searchicon={<AntDesign style = {{color : 'white',paddingRight : 10}} name="search1"/>}
                       
                        boxStyles={{borderWidth : 1,borderColor : 'white'}}
                        inputStyles = {{color:'white'}}
                        dropdownStyles = {{backgroundColor : '#012332'}}
                        dropdownTextStyles = {{color : 'white'}}
                        search = {false}
                        />
                    </View>

                    <View style = {{width : '90%',marginTop : 20,marginLeft : 5}}>
                        <SelectList 
                        data = {data2}
                        setSelected = {setSelected}
                        placeholder = "Select Class"
                        arrowicon={<AntDesign style = {{color : 'white'}} name="down"/>}
                        searchicon={<AntDesign style = {{color : 'white',paddingRight : 10}} name="search1"/>}
                       
                        boxStyles={{borderWidth : 1,borderColor : 'white'}}
                        inputStyles = {{color:'white'}}
                        dropdownStyles = {{backgroundColor : '#012332'}}
                        dropdownTextStyles = {{color : 'white'}}
                        search = {false}
                        />
                    </View>
                    
                    <View style={{alignItems: 'center',width : '90%',height : 90,marginTop : 50,}}>
                
                        <TouchableOpacity
                        onPress={() => props.navigation.navigate("Apptour")}
                        style={styles.button}>
                            
                            <Text style={styles.loremIpsum}>Continue</Text>
                        
                        </TouchableOpacity>
                    </View>
            
            </View>
            </ScrollView>
            {/* <View style={{flex : 0.5,alignItems: 'center'}}>
                
                <TouchableOpacity
                onPress={() => props.navigation.navigate("Apptour")}
                style={styles.button}>
                    
                    <Text style={styles.loremIpsum}>Continue</Text>
                
                </TouchableOpacity>
            </View> */}
            

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
    height: '50%',
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

export default School;
