import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import Video from "../screens/Video";
import ChapterTest from "../screens/ChapterTest";
import Resources from "../screens/Resources";
import QnBank from "../screens/QnBank";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView, Text, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";


const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = ({navigation}) => {
    return (
        <SafeAreaView style = {{flex : 1,width : '100%',height : '100%'}}>
            <View style = {{flex : 0.6,backgroundColor : '#002333'}}>
                <View style = {{flexDirection : 'row'}}>
                    <View style = {{borderWidth : 1,height : 45,width : 45,marginLeft : 25,borderColor : 'white',borderRadius : 5,marginTop : 20}}>
                        
                        <TouchableOpacity 
                        style = {{alignItems :'center',justifyContent : 'center',borderColor : 'red',height : 43}}
                        onPress = {  () => navigation.goBack()}>
                        <AntDesign
                        name = "left"
                        style ={{fontSize : 20,color : 'green'}}
                        />
                        </TouchableOpacity>
                    </View>
                    <View style = {{marginTop : 20,width : '100%',paddingLeft : 85,justifyContent : 'center'}}>
                        <Text style ={{color : 'white',fontSize : 22}}>Biology</Text>
                    </View>

                </View>
                <View style={{flex : 1,borderColor : 'red',paddingLeft : 25,justifyContent : 'center'}}>
                    <Text style = {{color:'white',fontSize : 30,fontWeight : 'bold'}}>Long Chapter name can be shown here</Text>
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
            <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle : {fontSize : 10,color : 'white'},
                tabBarStyle : {
                    backgroundColor : '#002333',
                    
                },
                
            }}>
                <Tab.Screen 
                name ="Video" 
                component = {Video} 
                options = {{
                    tabBarLabel : ({focused}) => (
                        <Text style={{color : focused?'white': 'grey', fontSize : 10}}>Videos</Text>
                    ),
                    tabBarActiveTintColor : "green",
                    tabBarIndicatorStyle : {backgroundColor : 'green',width : 70,height : 4,marginLeft : 13}
                }}
                />
                <Tab.Screen 
                name ="Chapter Test" 
                component = {ChapterTest} 
                options = {{
                    tabBarLabel : ({focused}) => (
                        <Text style={{color : focused?'white': 'grey', fontSize : 10}}>Chapter Test</Text>
                    ),
                    tabBarActiveTintColor : "green",
                    tabBarIndicatorStyle : {backgroundColor : 'green',width : 70,height : 4,marginLeft : 13}
                }}
                />
                <Tab.Screen 
                name ="Resources" 
                component = {Resources}
                options = {{
                    tabBarLabel : ({focused}) => (
                        <Text style={{color : focused?'white': 'grey', fontSize : 10}}>Resources</Text>
                    ),
                    tabBarActiveTintColor : "green",
                    tabBarIndicatorStyle : {backgroundColor : 'green',width : 70,height : 4,marginLeft : 13}
                }}
                />
                <Tab.Screen 
                name ="QN Bank" 
                component = {QnBank} 
                options = {{
                    tabBarLabel : ({focused}) => (
                        <Text style={{color : focused?'white': 'grey', fontSize : 10}}>QN Bank</Text>
                    ),
                    tabBarActiveTintColor : "green",
                    tabBarIndicatorStyle : {backgroundColor : 'green',width : 70,height : 4,marginLeft : 13}
                }}
                />

            </Tab.Navigator>
            
        </SafeAreaView>
        
    )
}

export default TopTabNavigator;