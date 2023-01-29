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
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

function Home(props) {
  const [selected,setSelected] = useState("");
  
  const data1 = [
    {key:'1',value:'Class 8'},
    {key:'2',value:'Class 9'},
    {key:'3',value:'Class 10'},
    {key:'4',value:'Class 11'},
    {key:'5',value:'Class 12'},


  ]
  
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.image}
        >
            <View style={[styles.rectone,{alignItems : 'center'}]}>
              <View style = {{borderWidth : 1,height : 45,width : 45,marginLeft : 25,borderColor : 'grey',borderRadius : 5,}}>
                <TouchableOpacity
                 style = {{flex : 1,alignItems :'center',justifyContent : 'center'}}
                 onPress = {  () => props.navigation.openDrawer()}>
                  <AntDesign
                  name = "menuunfold"
                  style ={{fontSize : 20,}}
                  />
                </TouchableOpacity>
              </View>
              <View style = {{flex : 1.5,}}>
                <Image
                source = {require('../assets/images/inmakes-learning-hub-kazhakuttam-thiruvananthapuram-tally-training-institutes-52yebidxyg.webp')}
                style = {{flex : 1,width : '110%',height : '100%'}}
                />
                </View>
              <View style={{flex : 1,height : '100%',alignItems :'center' , justifyContent: 'center'}}>
                <View style = {{borderWidth : 1,height : 40,width : 100,borderRadius : 5,flexDirection :'row',alignItems : 'center',borderColor : 'green'}}>
                  <FontAwesome 
                  name = "circle"
                  style = {{fontSize : 20,color : 'green', paddingLeft : 5,}}                  
                  />
                  <Text>   Classes</Text>

                </View>
              </View>
            </View>
            <View style= {styles.recttwo}>
              <ScrollView style= {{flex : 1}}>
                
                
                <View style = {{paddingTop : 30,paddingLeft : 25,justifyContent : 'center'}}>
                  <Text style = {{fontSize : 15,fontWeight : '1000'}}>Goodmorning</Text>
                  <Text style= {{fontSize : 30,fontWeight : 'bold'}}>John Doe</Text>
                </View>


                <View style = {{height : 120,alignItems : 'center',justifyContent : 'center',}}>
                  <View style = {{borderColor : 'red',height : '80%',width : '90%',borderRadius : 8,backgroundColor : '#012332'}}>
                    <Text style ={{color : 'lightgrey',marginTop : 10,marginLeft : 35,fontSize : 16}}>Class</Text>
                    <View style = {{width : '90%',marginLeft : 15,}}>
                        <ScrollView>

                        <SelectList 
                        arrowicon={<AntDesign style = {{color : 'white'}} name="down"/>}
                        searchicon={<AntDesign style = {{color : 'white',paddingRight : 10}} name="search1"/>}
                        data = {data1}
                        setSelected = {setSelected}
                        placeholder = "Select Class"
                        boxStyles={{borderWidth : 0,}}
                        inputStyles = {{color:'white'}}
                        dropdownStyles = {{backgroundColor : '#012332'}}
                        dropdownTextStyles = {{color : 'white'}}
                        search = {false}
                        />
                        </ScrollView>
                    </View>
                  </View>
                </View>
                <View style = {{height : 60,flexDirection : 'row',alignItems : 'center',paddingLeft : 15,}}>
                  
                    <ScrollView horizontal = {true}>
                      <TouchableOpacity style = {{borderWidth : 1.5,width : 120,height: 40,borderRadius : 7,marginLeft : 5,flexDirection : 'row',alignItems : 'center',paddingLeft : 5}} onPress = {()=> props.navigation.navigate("Biology")}>
                      <FontAwesome 
                      name = "circle"
                      style = {{fontSize : 30,color : '#00c64c', paddingLeft : 5,}}                  
                      />
                      <Text style = {{fontWeight : '500'}}>   Biology</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style = {{borderWidth : 1.5,width : 120,height: 40,borderRadius : 7,marginLeft : 5,flexDirection : 'row',alignItems : 'center',paddingLeft : 5}}  onPress = {()=> props.navigation.navigate("Physics")}>
                      <FontAwesome 
                      name = "circle"
                      style = {{fontSize : 30,color : '#00c64c', paddingLeft : 5,}}                  
                      />
                      <Text style = {{fontWeight : '500'}}>   Physics</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style = {{borderWidth : 1.5,width : 120,height: 40,borderRadius : 7,marginLeft : 5,flexDirection : 'row',alignItems : 'center',paddingLeft : 5}} onPress = {()=> props.navigation.navigate("Chemistry")}>
                      <FontAwesome 
                      name = "circle"
                      style = {{fontSize : 30,color : '#00c64c', paddingLeft : 5,}}                  
                      />
                      <Text style = {{fontWeight : '500'}}>   Chemistry</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style = {{borderWidth : 1.5,width : 120,height: 40,borderRadius : 7,marginLeft : 5,flexDirection : 'row',alignItems : 'center',paddingLeft : 5}} onPress = {()=> props.navigation.navigate("Maths")}>
                      <FontAwesome 
                      name = "circle"
                      style = {{fontSize : 30,color : '#00c64c', paddingLeft : 5,}}                  
                      />
                      <Text style = {{fontWeight : '500'}}>   Maths</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style = {{borderWidth : 1.5,width : 120,height: 40,borderRadius : 7,marginLeft : 5,flexDirection : 'row',alignItems : 'center',paddingLeft : 5}} onPress = {()=> props.navigation.navigate("English")}>
                      <FontAwesome 
                      name = "circle"
                      style = {{fontSize : 30,color : '#00c64c', paddingLeft : 5,}}                  
                      />
                      <Text style = {{fontWeight : '500'}}>   English</Text>
                      </TouchableOpacity>
                    </ScrollView>

                  
                </View>
                <View style = {{height : 160,marginTop : 5}}>
                  <Text style = {{fontSize : 15,paddingBottom : 5,marginLeft : 15, color : 'grey'}}>Recent Courses</Text>
                  <View style = {{height :'80%',flexDirection : 'row',alignItems : 'center',paddingLeft : 15,}}>
                  
                    <ScrollView horizontal = {true}>
                      <View style = {{borderWidth : 1.5,width : 210,height: 120,marginLeft : 5,flexDirection : 'row',alignItems : 'center',}}>
                        <Image source = {require('../assets/images/placeholder.jpeg')} style = {{flex : 1,width : '100%',height : '100%'}}/>
                      </View>
                      <View style = {{borderWidth : 1.5,width : 210,height: 120,marginLeft : 5,flexDirection : 'row',alignItems : 'center',}}>
                        <Image source = {require('../assets/images/placeholder.jpeg')} style = {{flex : 1,width : '100%',height : '100%'}}/>
                      </View>
                      <View style = {{borderWidth : 1.5,width : 210,height: 120,marginLeft : 5,flexDirection : 'row',alignItems : 'center',}}>
                        <Image source = {require('../assets/images/placeholder.jpeg')} style = {{flex : 1,width : '100%',height : '100%'}}/>
                      </View>
                      <View style = {{borderWidth : 1.5,width : 210,height: 120,marginLeft : 5,flexDirection : 'row',alignItems : 'center',}}>
                        <Image source = {require('../assets/images/placeholder.jpeg')} style = {{flex : 1,width : '100%',height : '100%'}}/>
                      </View>
                      
                    </ScrollView>

                  
                  </View>
                </View>
                <View style = {{height : 400,}}>
                
                  <View style = {{height :'90%',flexDirection : 'row',paddingLeft : 15,marginTop : 5}}>
                  
                    <ScrollView horizontal = {true}>
                      <View style = {{borderWidth : 1.5,width : 250,height: 340,marginLeft : 5,flexDirection : 'row',borderRadius : 10,flex : 1,backgroundColor : '#002333'}}>
                        <View style = {{borderColor : 'red',flex : 1,height : '45%',marginTop : 10}}>
                          <View style = {{borderColor : 'grey',height : 100,width : 100,marginTop : 20,marginLeft : 20,borderRadius : 50,backgroundColor : '#002f43'}}>
                          
                          </View>
                          <View style = {{borderColor : 'green',height : '80%',marginTop : 20,paddingLeft : 20,}}>
                            <Text style = {{fontSize : 20,color : 'white',fontWeight : 'bold'}}>Inmakes Live Classes</Text>
                            <Text style ={{color : 'white',marginTop : 10}}>Live classes by best teachers from Learning Hub to clear your doubts and to provide individual attention</Text>
                          </View>
                          <View style = {{alignItems : 'center',justifyContent : 'center',borderColor : 'green',height : 65}}>
                            <TouchableOpacity style ={{borderColor : 'red',height : '80%',width : '90%',borderRadius : 5,backgroundColor : 'green',alignItems : 'center',justifyContent : 'center'}}>
                              <Text style = {{fontSize : 18,color : 'white',fontWeight : 'bold'}}>Book a free class </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                      
                      <View style = {{borderWidth : 1.5,width : 250,height: 340,marginLeft : 5,flexDirection : 'row',borderRadius : 10,flex : 1,backgroundColor : '#002333'}}>
                        <View style = {{borderColor : 'red',flex : 1,height : '45%',marginTop : 10}}>
                          <View style = {{borderColor : 'grey',height : 100,width : 100,marginTop : 20,marginLeft : 20,borderRadius : 50,backgroundColor : '#002f43'}}>
                          
                          </View>
                          <View style = {{borderColor : 'green',height : '80%',marginTop : 20,paddingLeft : 20,}}>
                            <Text style = {{fontSize : 20,color : 'white',fontWeight : 'bold'}}>Inmakes Live Classes</Text>
                            <Text style ={{color : 'white',marginTop : 10}}>Live classes by best teachers from Learning Hub to clear your doubts and to provide individual attention</Text>
                          </View>
                          <View style = {{alignItems : 'center',justifyContent : 'center',borderColor : 'green',height : 65}}>
                            <TouchableOpacity style ={{borderColor : 'red',height : '80%',width : '90%',borderRadius : 5,backgroundColor : 'green',alignItems : 'center',justifyContent : 'center'}}>
                              <Text style = {{fontSize : 18,color : 'white',fontWeight : 'bold'}}>Book a free class </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>  

                      <View style = {{borderWidth : 1.5,width : 250,height: 340,marginLeft : 5,flexDirection : 'row',borderRadius : 10,flex : 1,backgroundColor : '#002333'}}>
                        <View style = {{borderColor : 'red',flex : 1,height : '45%',marginTop : 10}}>
                          <View style = {{borderColor : 'grey',height : 100,width : 100,marginTop : 20,marginLeft : 20,borderRadius : 50,backgroundColor : '#002f43'}}>
                          
                          </View>
                          <View style = {{borderColor : 'green',height : '80%',marginTop : 20,paddingLeft : 20,}}>
                            <Text style = {{fontSize : 20,color : 'white',fontWeight : 'bold'}}>Inmakes Live Classes</Text>
                            <Text style ={{color : 'white',marginTop : 10}}>Live classes by best teachers from Learning Hub to clear your doubts and to provide individual attention</Text>
                          </View>
                          <View style = {{alignItems : 'center',justifyContent : 'center',borderColor : 'green',height : 65}}>
                            <TouchableOpacity style ={{borderColor : 'red',height : '80%',width : '90%',borderRadius : 5,backgroundColor : 'green',alignItems : 'center',justifyContent : 'center'}}>
                              <Text style = {{fontSize : 18,color : 'white',fontWeight : 'bold'}}>Book a free class </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View> 
                      <View style = {{borderWidth : 1.5,width : 250,height: 340,marginLeft : 5,flexDirection : 'row',borderRadius : 10,flex : 1,backgroundColor : '#002333'}}>
                        <View style = {{borderColor : 'red',flex : 1,height : '45%',marginTop : 10}}>
                          <View style = {{borderColor : 'grey',height : 100,width : 100,marginTop : 20,marginLeft : 20,borderRadius : 50,backgroundColor : '#002f43'}}>
                          
                          </View>
                          <View style = {{borderColor : 'green',height : '80%',marginTop : 20,paddingLeft : 20,}}>
                            <Text style = {{fontSize : 20,color : 'white',fontWeight : 'bold'}}>Inmakes Live Classes</Text>
                            <Text style ={{color : 'white',marginTop : 10}}>Live classes by best teachers from Learning Hub to clear your doubts and to provide individual attention</Text>
                          </View>
                          <View style = {{alignItems : 'center',justifyContent : 'center',borderColor : 'green',height : 65}}>
                            <TouchableOpacity style ={{borderColor : 'red',height : '80%',width : '90%',borderRadius : 5,backgroundColor : 'green',alignItems : 'center',justifyContent : 'center'}}>
                              <Text style = {{fontSize : 18,color : 'white',fontWeight : 'bold'}}>Book a free class </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View> 
                        
                        
                        
                        
                        
                        
                        
                      
                      
                    </ScrollView>

                  
                  </View>
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

export default Home;

