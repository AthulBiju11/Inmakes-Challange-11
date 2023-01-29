import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import Video from "../screens/Video";
import ChapterTest from "../screens/ChapterTest";
import Resources from "../screens/Resources";
import QnBank from "../screens/QnBank";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView, Text, Touchable } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "react-native";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = ({navigation}) => {
    return (
        <SafeAreaView style = {{flex : 1,width : '100%',height : '100%'}}>
            <ScrollView style = {{flex : 1,height : '100%',width : '100%'}}>
              
              <View style = {{flex : 1,backgroundColor : '#002333',flex : 1,height : 250,position : 'relative'}}>
                  <View style = {{flexDirection : 'row'}}>
                      <View style = {{marginTop : 20,width : '100%',justifyContent : 'center',borderColor  :'white',flex :7}}>
                          <Text style ={{color : 'white',fontSize : 24,marginLeft : 140,fontWeight : 'bold'}}> Profile</Text>
                      </View>
                      <View style = {{height : 45,width : 45,marginLeft : 45,borderRadius : 5,marginTop : 20,flex : 1}}>
                          
                          <TouchableOpacity 
                          style = {{alignItems :'center',justifyContent : 'center',borderColor : 'red',height : 43}}
                          // onPress = {  () => navigation.goBack()}
                          >
                          <Ionicons
                          name = "notifications-outline"
                          style ={{fontSize : 25,color : 'white'}}
                          />
                          </TouchableOpacity>
                      </View>
                      <View style = {{borderWidth : 1,height : 45,width : 45,marginLeft : 10,borderColor : 'white',borderRadius : 5,marginTop : 20,flex : 1,marginRight : 20,}}>
                          
                          <TouchableOpacity 
                          style = {{alignItems :'center',justifyContent : 'center',borderColor : 'red',height : 43}}
                          onPress = {  () => navigation.goBack()}>
                          <AntDesign
                          name = "home"
                          style ={{fontSize : 25,color : 'white'}}
                          />
                          </TouchableOpacity>
                      </View>

                  </View>
                  <View style = {{borderColor : 'white',borderRadius : 10,width : '90%',height : 600 ,marginLeft : 20,marginTop : 10,backgroundColor : 'white'}}>
                    <View style = {{flex : 2, alignItems : 'center',flexDirection : 'row'}}>
                      <View style = {{borderWidth : 2,width : 70,height : 70,borderRadius : 35,marginLeft : 20,borderColor : 'lightgreen'}}>
                        <Image source = {require('../assets/images/user-profile.jpg')}
                        style = {{flex : 1,width : '100%',height : '100%',borderRadius : 35}}
                        ></Image>
                      </View>
                      <View style = {{marginLeft : 20,width : '30%',height : '50%',justifyContent : 'center'}}>
                        <Text style = {{fontWeight : 'bold',fontSize : 18}}>John Doe</Text>
                        <Text style = {{color : 'grey'}}>ID : 123456</Text>

                      </View>
                     
                    </View>
                    <View style = {{flex : 8,borderColor : 'red'}}>
                      
                      
                      <View style ={{flex : 0.8,height : '20%',}}>
                        
                        <View style = {{height : 50,borderBottomWidth : 1,paddingLeft : 20,borderColor : 'grey'}}>
                          <Text style= {{fontWeight : 'bold',fontSize : 15,}}>Personal Info</Text>
                        </View>
                        <View style = {{borderBottomWidth : 1,height : 50,flexDirection : 'row',alignItems : 'center',marginLeft : 10,marginRight : 10,borderColor : 'grey'}}>
                          <Text style = {{marginLeft : 25,fontSize : 15,color : 'grey',width : 150}}>Account Settings</Text>
                          <Text style = {{marginLeft : 20,fontSize : 15,fontWeight : 'bold'}}>John Doe</Text>

                        </View>
                        <View style = {{borderBottomWidth : 1,height : 50,flexDirection : 'row',alignItems : 'center',marginLeft : 10,marginRight : 10,borderColor : 'grey'}}>
                          <Text style = {{marginLeft : 25,fontSize : 15,color : 'grey',width : 150}}>Email</Text>
                          <Text style = {{marginLeft : 20,fontSize : 15,fontWeight : 'bold'}}>john@gmail.com</Text>

                        </View>
                        <View style = {{borderBottomWidth : 1,height : 50,flexDirection : 'row',alignItems : 'center',marginLeft : 10,marginRight : 10,borderColor : 'grey'}}>
                          <Text style = {{marginLeft : 25,fontSize : 15,color : 'grey',width : 150}}>Number</Text>
                          <Text style = {{marginLeft : 20,fontSize : 15,fontWeight : 'bold'}}>9876543210</Text>

                        </View>
                      
                      </View>
                        
                      
                      <View style = {{flex : 1,}}>
                        <View style = {{height : 50,borderBottomWidth : 1,paddingLeft : 20,borderColor : 'grey',paddingTop : 10,}}>
                          <Text style= {{fontWeight : 'bold',fontSize : 15,}}>Personal Info</Text>
                        </View>
                        <View style = {{borderBottomWidth : 1,height : 50,flexDirection : 'row',alignItems : 'center',marginLeft : 10,marginRight : 10,borderColor : 'grey'}}>
                          <Text style = {{marginLeft : 25,fontSize : 15,color : 'grey',width : 150}}>Center</Text>
                          <Text style = {{marginLeft : 20,fontSize : 15,fontWeight : 'bold'}}>Inmakes Edu</Text>

                        </View>
                        <View style = {{borderBottomWidth : 1,height : 50,flexDirection : 'row',alignItems : 'center',marginLeft : 10,marginRight : 10,borderColor : 'grey'}}>
                          <Text style = {{marginLeft : 25,fontSize : 15,color : 'grey',width : 150}}>Course</Text>
                          <Text style = {{marginLeft : 20,fontSize : 15,fontWeight : 'bold'}}>BCA</Text>

                        </View>
                        <View style = {{borderBottomWidth : 1,height : 50,flexDirection : 'row',alignItems : 'center',marginLeft : 10,marginRight : 10,borderColor : 'grey'}}>
                          <Text style = {{marginLeft : 25,fontSize : 15,color : 'grey',width : 150}}>Payment Status</Text>
                          <Text style = {{marginLeft : 20,fontSize : 15,fontWeight : 'bold'}}>Free</Text>

                        </View>
                        <View style = {{height : 50,flexDirection : 'row',alignItems : 'center',marginLeft : 10,marginRight : 10,borderColor : 'grey'}}>
                          <Text style = {{marginLeft : 25,fontSize : 15,color : 'grey',width : 150}}>Expiry Date</Text>
                          <Text style = {{marginLeft : 20,fontSize : 15,fontWeight : 'bold'}}>Not Applicable</Text>

                        </View>
                      </View>

                    
                    </View>
                  </View>
              </View>
              <View style={{backgroundColor : '#f9f7f8',width : '100%',height : 275,marginTop : 425,}}>
                <View style = {{height :'70%',alignItems : 'center',}}>
                  <View style = {{marginTop : 10,width : '90%',height : 70,backgroundColor : '#00c458',borderRadius : 10,}}>
                    <TouchableOpacity style = {{width : '100%',borderColor : 'red',height : '100%',alignItems : 'center',flexDirection : 'row'}}>
                      <AntDesign name = "profile" style = {{fontSize : 30,borderWidth : 1,width : 50,height : 50,color : 'white',paddingLeft : 7,paddingTop : 7,borderColor : 'white',borderRadius : 5,marginLeft : 20,backgroundColor : '#2fcf77'}} ></AntDesign>
                      <Text style = {{height : 30,width : 160,marginLeft : 20,color : 'white',fontSize : 16,paddingTop : 4}}>Custom Payment</Text>
                      <AntDesign name = "right" style = {{color : 'white',marginLeft : 50}}></AntDesign>
                    </TouchableOpacity>
                    
                  </View>
                  <View style = {{marginTop : 10,width : '90%',height : 70,backgroundColor : '#00c458',borderRadius : 10,}}>
                    <TouchableOpacity style = {{width : '100%',borderColor : 'red',height : '100%',alignItems : 'center',flexDirection : 'row'}}>
                      <Ionicons name = "arrow-redo-sharp" style = {{fontSize : 30,borderWidth : 1,width : 50,height : 50,color : 'white',paddingLeft : 10,paddingTop : 7,borderColor : 'white',borderRadius : 5,marginLeft : 20,backgroundColor : '#2fcf77'}} ></Ionicons>
                      <Text style = {{height : 30,width : 160,marginLeft : 20,color : 'white',fontSize : 16,paddingTop : 4}}>Referals</Text>
                      <AntDesign name = "right" style = {{color : 'white',marginLeft : 50}}></AntDesign>
                    </TouchableOpacity>
                    
                  </View>
                </View>
              </View>
            </ScrollView>
            
        </SafeAreaView>
        
    )
}

export default TopTabNavigator;