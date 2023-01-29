import React from 'react'
import {View,Text, ImageBackground,Image, TouchableOpacity} from 'react-native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList, } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { DrawerActions } from '@react-navigation/native'



const CustomDrawer = (props) => {
    return(
        <View style = {{flex : 1}}>

            <ImageBackground source = {require('../assets/images/menu-bg.jpeg')} style = {{padding: 10, flex :1}}>
            <DrawerContentScrollView {...props} contentContainerStyle = {{width : '100%',height : '100%'}}>
                
                <DrawerItem
                label = ""
                icon = {(color,size) => (
                    <View style = {{borderWidth : 1,width : 40,height : 40,borderRadius : 5,paddingLeft : 7,justifyContent : 'center',borderColor : 'white'}}>
                        <Ionicons
                        name = "close"
                        color = 'white'                        
                        size = {size}
                        style ={{fontSize : 25}}
                        />
                    </View>
                )}
                onPress = {() => props.navigation.closeDrawer()}
                
                />

                
                <View style = {{flexDirection : 'row',flex : 2,marginLeft : 10,marginTop : 20}}>
                    <Image source = {require('../assets/images/user-profile.jpg')} style = {{height : 80, width : 80, borderRadius : 40,marginBottom : 10}}/>
                    <View style = {{height : 50,marginLeft : 30,alignItems : 'right',marginTop : 20}}>
                        <Text style = {{color : 'white',fontSize : 18,}}>John Doe</Text>
                        <Text style = {{color : 'darkgrey'}}>ID : 1234</Text>

                    </View>

                </View>
                
                <View style = {{flex : 10,paddingTop : 10}}>
                    <DrawerItem
                    label = "Home"
                    labelStyle = {{color : 'white'}}
                   
                    icon = {({color,size}) => (
                        <View style = {{borderWidth : 1,width : 40,height : 40,borderRadius : 5,paddingLeft : 7,justifyContent : 'center',borderColor : 'white'}}>
                            <Ionicons
                            name = "home-outline"
                            color = 'white'                        
                            size = {size}
                            />

                        </View>
                    )}
                    onPress = {()=>props.navigation.navigate('Home')}
                    style = {{borderBottomWidth : 1,borderBottomColor: 'grey',paddingBottom : 5,}}
                    />  
                    <DrawerItem
                    label = "Exam Corner"
                    labelStyle = {{color : 'white'}}
                    icon = {({color,size}) => (
                        <View style = {{borderWidth : 1,width : 40,height : 40,borderRadius : 5,paddingLeft : 7,justifyContent : 'center',borderColor : 'white'}}>
                            <MaterialCommunityIcons
                            name = "ab-testing"
                            color = 'white'                        
                            size = {size}
                            />

                        </View>
                    )}
                    onPress = {()=>props.navigation.navigate('Exam Corner')}
                    style = {{borderBottomWidth : 1,borderBottomColor: 'grey',paddingBottom : 5}}
                    />
                    <DrawerItem
                    label = "Subscriptions"
                    labelStyle = {{color : 'white'}}
                    icon = {({color,size}) => (
                        <View style = {{borderWidth : 1,width : 40,height : 40,borderRadius : 5,paddingLeft : 7,justifyContent : 'center',borderColor : 'white'}}>
                            <Ionicons
                            name = "people"
                            color = 'white'                        
                            size = {size}
                            />

                        </View>
                    )}
                    onPress = {()=>props.navigation.navigate('Subscriptions')}
                    style = {{borderBottomWidth : 1,borderBottomColor: 'grey',paddingBottom : 5}}
                    />
                    <DrawerItem
                    label = "Analytics"
                    labelStyle = {{color : 'white'}}
                    icon = {({color,size}) => (
                        <View style = {{borderWidth : 1,width : 40,height : 40,borderRadius : 5,paddingLeft : 7,justifyContent : 'center',borderColor : 'white'}}>
                            <Entypo
                            name = "bar-graph"
                            color = 'white'                        
                            size = {size}
                            />

                        </View>
                    )}
                    onPress = {()=>props.navigation.navigate('Analytics')}
                    style = {{borderBottomWidth : 1,borderBottomColor: 'grey',paddingBottom : 5}}
                    />  
                    <DrawerItem
                    label = "Logout"
                    labelStyle = {{color : 'white'}}
                    icon = {({color,size}) => (
                        <View style = {{borderWidth : 1,width : 40,height : 40,borderRadius : 5,paddingLeft : 7,justifyContent : 'center',borderColor : 'white'}}>
                            <MaterialCommunityIcons
                            name = "logout"
                            color = 'white'                        
                            size = {size}
                            />

                        </View>
                    )}
                    // onPress = {()=>props.navigation.navigate('Analytics')}
                    style = {{borderBottomWidth : 1,borderBottomColor: 'grey',paddingBottom : 5}}
                    />    
                </View>
            </DrawerContentScrollView>
            </ImageBackground>
            <View style = {{flex :0.1,alignItems : 'center',backgroundColor : '#8200d6',paddingTop : 10}}>
                <TouchableOpacity style ={{borderWidth : 1,width : '80%',height : '80%',borderRadius : 6,alignItems : 'center', justifyContent : 'center',borderColor : 'white'}}>
                    <Text style= {{color : 'white'}}>Enquire Now</Text>

                </TouchableOpacity>
            </View>
        </View>


       
    )
}

export default CustomDrawer