import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Contact = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>Contact</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        alignItems: 'center',
        justifyContent : 'center',
    },
    text : {
        fontWeight : 'bold',
        fontSize : 25,
        paddingTop : 250,
    }
})

export default Contact