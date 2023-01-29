import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
  ImageBackground
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

function Maths(props) {

  
  return (
    <SafeAreaView style={styles.container}>
        <View style = {{borderWidth : 1,flex : 2.3,backgroundColor : '#002333'}}>
            <View style = {{borderWidth : 1,height : 45,width : 45,marginLeft : 25,borderColor : 'white',borderRadius : 5,marginTop : 20}}>
                <TouchableOpacity
                 style = {{flex : 1,alignItems :'center',justifyContent : 'center'}}
                 onPress = {  () => props.navigation.goBack()}>
                  <AntDesign
                  name = "left"
                  style ={{fontSize : 20,color : 'green'}}
                  />
                </TouchableOpacity>
            </View>
            <View style={{flex : 1,borderColor : 'red',paddingLeft : 25,justifyContent : 'center'}}>
                <Text style = {{color:'white',fontSize : 30,fontWeight : 'bold'}}>Maths</Text>
                <View style = {{flexDirection : 'row'}}>
                    <View style ={{width: '35%',flexDirection : 'row',height : 30,}}>
                        <FontAwesome name="dot-circle-o" style = {{fontSize : 20,color : 'green'}}/>
                        <Text style ={{color : 'white',paddingLeft : 10,paddingTop : 2}}>12 Chapters</Text>
                    </View>
                    <View style ={{width: '35%',flexDirection : 'row',height : 30,marginLeft : 10,}}>
                        <FontAwesome name="dot-circle-o" style = {{fontSize : 20,color : 'green'}}/>
                        <Text style ={{color : 'white',paddingLeft : 10,paddingTop : 2}}>128 Hours</Text>
                    </View>

                </View>
            </View>
        </View>
        <View style = {{flex : 4,backgroundColor : 'lightgrey'}}>
            <View style = {{flex : 1,alignItems : 'center',}}>
                <ScrollView style = {{flex : 1,width : '100%',}}>
                    <View style = {{alignItems : 'center'}}>
                        
                        <TouchableOpacity style= {{borderColor : 'green',height : 150,marginTop : 20,width : '90%',borderRadius : 8, backgroundColor : 'white'}}>
                            
                            
                            <View style={{flex : 1,borderColor : 'red',paddingLeft : 25,justifyContent : 'center'}}>
                                <Text style = {{color:'#00202f',fontSize : 20,fontWeight : 'bold'}}>Long chapter name can be shown here</Text>
                                <View style = {{flexDirection : 'row',marginTop : 20}}>
                                    <View style ={{width: '35%',flexDirection : 'row',height : 30,}}>
                                        <FontAwesome name="dot-circle-o" style = {{fontSize : 20,color : 'green'}}/>
                                        <Text style ={{color : 'grey',paddingLeft : 10,paddingTop : 2}}>Chapter 1</Text>
                                    </View>
                                    <View style ={{width: '35%',flexDirection : 'row',height : 30,marginLeft : 10,}}>
                                        <FontAwesome name="dot-circle-o" style = {{fontSize : 20,color : 'green'}}/>
                                        <Text style ={{color : 'grey',paddingLeft : 10,paddingTop : 2}}>3 parts</Text>
                                    </View>
                                 </View>
                            </View>


                        </TouchableOpacity>
                        <TouchableOpacity style= {{borderColor : 'green',height : 150,marginTop : 20,width : '90%',borderRadius : 8, backgroundColor : 'white'}}>
                            
                            
                            <View style={{flex : 1,borderColor : 'red',paddingLeft : 25,justifyContent : 'center'}}>
                                <Text style = {{color:'#00202f',fontSize : 20,fontWeight : 'bold'}}>Long chapter name can be shown here</Text>
                                <View style = {{flexDirection : 'row',marginTop : 20}}>
                                    <View style ={{width: '35%',flexDirection : 'row',height : 30,}}>
                                        <FontAwesome name="dot-circle-o" style = {{fontSize : 20,color : 'green'}}/>
                                        <Text style ={{color : 'grey',paddingLeft : 10,paddingTop : 2}}>Chapter 1</Text>
                                    </View>
                                    <View style ={{width: '35%',flexDirection : 'row',height : 30,marginLeft : 10,}}>
                                        <FontAwesome name="dot-circle-o" style = {{fontSize : 20,color : 'green'}}/>
                                        <Text style ={{color : 'grey',paddingLeft : 10,paddingTop : 2}}>3 parts</Text>
                                    </View>
                                 </View>
                            </View>


                        </TouchableOpacity>
                        <TouchableOpacity style= {{borderColor : 'green',height : 150,marginTop : 20,width : '90%',borderRadius : 8, backgroundColor : 'white'}}>
                            
                            
                            <View style={{flex : 1,borderColor : 'red',paddingLeft : 25,justifyContent : 'center'}}>
                                <Text style = {{color:'#00202f',fontSize : 20,fontWeight : 'bold'}}>Long chapter name can be shown here</Text>
                                <View style = {{flexDirection : 'row',marginTop : 20}}>
                                    <View style ={{width: '35%',flexDirection : 'row',height : 30,}}>
                                        <FontAwesome name="dot-circle-o" style = {{fontSize : 20,color : 'green'}}/>
                                        <Text style ={{color : 'grey',paddingLeft : 10,paddingTop : 2}}>Chapter 1</Text>
                                    </View>
                                    <View style ={{width: '35%',flexDirection : 'row',height : 30,marginLeft : 10,}}>
                                        <FontAwesome name="dot-circle-o" style = {{fontSize : 20,color : 'green'}}/>
                                        <Text style ={{color : 'grey',paddingLeft : 10,paddingTop : 2}}>3 parts</Text>
                                    </View>
                                 </View>
                            </View>


                        </TouchableOpacity>
                        <TouchableOpacity style= {{borderColor : 'green',height : 150,marginTop : 20,width : '90%',borderRadius : 8, backgroundColor : 'white'}}>
                            
                            
                            <View style={{flex : 1,borderColor : 'red',paddingLeft : 25,justifyContent : 'center'}}>
                                <Text style = {{color:'#00202f',fontSize : 20,fontWeight : 'bold'}}>Long chapter name can be shown here</Text>
                                <View style = {{flexDirection : 'row',marginTop : 20}}>
                                    <View style ={{width: '35%',flexDirection : 'row',height : 30,}}>
                                        <FontAwesome name="dot-circle-o" style = {{fontSize : 20,color : 'green'}}/>
                                        <Text style ={{color : 'grey',paddingLeft : 10,paddingTop : 2}}>Chapter 1</Text>
                                    </View>
                                    <View style ={{width: '35%',flexDirection : 'row',height : 30,marginLeft : 10,}}>
                                        <FontAwesome name="dot-circle-o" style = {{fontSize : 20,color : 'green'}}/>
                                        <Text style ={{color : 'grey',paddingLeft : 10,paddingTop : 2}}>3 parts</Text>
                                    </View>
                                 </View>
                            </View>


                        </TouchableOpacity>
                        <TouchableOpacity style= {{borderColor : 'green',height : 150,marginTop : 20,width : '90%',borderRadius : 8, backgroundColor : 'white'}}>
                            
                            
                            <View style={{flex : 1,borderColor : 'red',paddingLeft : 25,justifyContent : 'center'}}>
                                <Text style = {{color:'#00202f',fontSize : 20,fontWeight : 'bold'}}>Long chapter name can be shown here</Text>
                                <View style = {{flexDirection : 'row',marginTop : 20}}>
                                    <View style ={{width: '35%',flexDirection : 'row',height : 30,}}>
                                        <FontAwesome name="dot-circle-o" style = {{fontSize : 20,color : 'green'}}/>
                                        <Text style ={{color : 'grey',paddingLeft : 10,paddingTop : 2}}>Chapter 1</Text>
                                    </View>
                                    <View style ={{width: '35%',flexDirection : 'row',height : 30,marginLeft : 10,}}>
                                        <FontAwesome name="dot-circle-o" style = {{fontSize : 20,color : 'green'}}/>
                                        <Text style ={{color : 'grey',paddingLeft : 10,paddingTop : 2}}>3 parts</Text>
                                    </View>
                                 </View>
                            </View>


                        </TouchableOpacity>

                    </View>
                </ScrollView>

            </View>

        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,width : '100%',height : '100%'
  },
  image : {
    width : '100%',
    height : '100%',
    flex :1,
    backgroundColor : 'white'
  },
  rectone : {
    flex : 1.7,
    borderBottomColor : 'lightgrey',
    borderBottomWidth : 1,
    width : '100%',
    height : '100%',
    flexDirection : 'row',
  },
  recttwo : {
    flex : 9,
    
  }
});

export default Maths;

