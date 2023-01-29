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
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";


function InBiology(props) {

  
  return (
    <SafeAreaView style={styles.container}>
        <View style = {{borderWidth : 1,flex : 4,backgroundColor : '#002333'}}>
            <View style = {{flexDirection : 'row'}}>
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
        <View style = {{flex : 5}}>

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

export default InBiology;

