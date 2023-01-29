import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Recent from "../components/exscreens/Recent";
import Contact from "../components/exscreens/Contact";
import Exams from "../components/exscreens/Exams";
import Profile from "../screens/Profile";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Text, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown : false,
            tabBarStyle : {
                position : 'absolute',
                bottom : 25,
                left: 20,
                right : 20,
                elevation : 0,
                backgroundColor : 'lightgrey',
                borderRadius : 15,
                
            }
            
                       
        }}
        >
            
            <Tab.Screen name = "Home1" 
            component = {Home} 
            options = {{
                tabBarLabel : ({focused}) => (
                    <Text style={{color : focused?'lightgrey': 'black', fontSize : 10}}>Home</Text>
                ),

                tabBarIcon : ({color,size,focused}) => (
                        <Entypo name="home" size = {size} style = {{color : focused ? 'green' : 'grey'}} />
                ),
                
                
            }}
            />
            <Tab.Screen name = "Recent" component = {Recent}
             options = {{
                tabBarLabel : ({focused}) => (
                    <Text style={{color : focused?'lightgrey': 'black', fontSize : 10}}>Recent</Text>
                ),
                tabBarIcon : ({color,size,focused}) => (
                        <Entypo name="controller-play" size = {size} style = {{color : focused ? 'green' : 'grey'}} />
                )
                
            }}
            />
            <Tab.Screen name = "Exams" component = {Exams}
            options = {{
                tabBarLabel : ({focused}) => (
                    <Text style={{color : focused?'lightgrey': 'black', fontSize : 10}}>Exams</Text>
                ),
                tabBarIcon : ({color,size,focused}) => (
                        <Entypo name="text-document-inverted" size = {size} style = {{color : focused ? 'green' : 'grey'}} />
                )
                
            }}
            />
            <Tab.Screen name = "Profile" component = {Profile}
            options = {{
                tabBarLabel : ({focused}) => (
                    <Text style={{color : focused?'lightgrey': 'black', fontSize : 10}}>Profile</Text>
                ),
                tabBarIcon : ({color,size,focused}) => (
                        <Ionicons name="person"  size = {size} style = {{color : focused ? 'green' : 'grey'}} />
                ),
                

                
            }}
            />
            <Tab.Screen name = "Contact" component = {Contact}
            options = {{
                tabBarLabel : ({focused}) => (
                    <Text style={{color : focused?'lightgrey': 'black', fontSize : 10}}>Contact</Text>
                ),
                tabBarIcon : ({color,size,focused}) => (
                        <Entypo name="mail" color ={'black'} size = {size} style = {{color : focused ? 'green' : 'grey'}} />
                )
                
            }}
            />

        </Tab.Navigator>

    )
}

export default TabNavigator