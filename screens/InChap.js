import React from "react";
import Video from "../screens/Video";
import ChapterTest from "../screens/ChapterTest";
import Resources from "../screens/Resources";
import QnBank from "../screens/QnBank";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView, Text, Touchable } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "react-native";


const InChap = ({navigation}) => {
    return (
        <SafeAreaView style = {{flex : 1,width : '100%',height : '100%'}}>
            
            
            <View style = {{flex : 2.75,backgroundColor : '#002333'}}>
                <Image style = {{flex : 1,width : '100%',height : '100%'}} source = {require('../assets/images/placeholder2.jpeg')}/>
            </View>
            
            
            <View style = {{flex : 6}}>
                <View style ={{flex : 2,backgroundColor: '#002232',flexDirection : 'row',alignItems : 'center'}}>
                    <View style={{borderColor : 'lightgrey',width : '80%',height : '70%',alignItems : 'center',justifyContent : 'center',borderRightWidth : 1,}}>
                        <Text style={{color : 'white',fontSize : 20,fontWeight : 'bold'}}>Long Chapter Name can be shown here</Text>
                    </View>
                    <View style = {{borderColor : 'red',flex : 1,height : '70%',}}>
                        <TouchableOpacity style = {{borderColor : 'green',height : '100%',alignItems : 'center',justifyContent : 'center'}}>
                            <Feather name="download" style = {{color : 'white',fontSize : 30}}/>
                            <Text style={{color:'white',fontSize : 10}}>Download</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style = {{flex : 1.6,backgroundColor : '#002232',flexDirection : 'row',alignItems : 'center',paddingLeft :15,paddingRight : 1,borderTopWidth : 1,borderBottomWidth : 1,borderColor : 'grey'}}>
                    <TouchableOpacity style = {{borderColor : 'green',width : 100,height : '70%',flexDirection : 'row',alignItems : 'center',padding : 10,}}>
                        <AntDesign name="left" style = {{fontSize : 25,color : 'white'}}/>
                        <Text style ={{fontSize :10,color : 'white'}}>Previous</Text>
                    </TouchableOpacity>
                    <View style = {{borderColor : 'green',width : 100,height : '70%',marginLeft : 20,flexDirection : 'row',alignItems : 'center',justifyContent : 'center'}}>
                        <FontAwesome name="dot-circle-o" style = {{fontSize : 20,color : '#1fb377'}}/>
                        <Text style ={{color : '#1fb377',paddingLeft : 10,paddingTop : 2}}>Part 1</Text>
                    </View>
                    <TouchableOpacity style = {{borderColor : 'green',width : 100,height : '70%',flexDirection : 'row',alignItems : 'center',padding : 10,marginLeft : 20,paddingLeft : 40}}>
                        <Text style ={{fontSize :10,color : 'white'}}>Next</Text>
                        <AntDesign name="right" style = {{fontSize : 25,color : 'white'}}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex : 6,backgroundColor : '#002232',alignItems : 'center'}}>
                    <View style = {{borderColor : 'grey',width : '90%',height : 70,marginTop : 135,borderRadius : 10,backgroundColor : '#072d40',justifyContent : 'center',flexDirection : 'row',alignItems : 'center'}}>
                        <View style = {{borderColor : 'green',width : '70%',height : '70%',alignItems : 'center',}}>
                            <TextInput placeholder="Ask a question?" style = {{height : '100%',paddingLeft : 10,width : '100%'}}/>                            
                            
                        </View>
                        <View style = {{flex : 1,height : '100%',alignItems : 'center',justifyContent : 'center'}}>
                            <TouchableOpacity style = {{borderWidth : 1,borderColor  :'white',width : 80,height : '80%',marginTop : 6,borderRadius : 10,backgroundColor : 'white',alignItems : 'center',justifyContent : 'center'}}>
                                <Text style = {{color :'#072d40',fontWeight  :'bold', }}>Post</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View  style ={{borderWidth  :1, borderColor : 'green',width : '90%',height : '20%',marginTop : 10,borderRadius : 5,flexDirection : 'row',alignItems : 'center',justifyContent : 'center'}}>
                        <TouchableOpacity style = {{flexDirection : 'row',flex : 1,width : 335,alignItems : 'center',justifyContent : 'center'}}>
                            <FontAwesome name = "whatsapp" style = {{color : 'green',fontSize : 30}}/>
                            <Text style= {{color : 'green',paddingLeft : 10}}>Chat with teacher</Text>

                        </TouchableOpacity>
                    </View>
                </View>


            </View>
            
        </SafeAreaView>
        
    )
}

export default InChap;