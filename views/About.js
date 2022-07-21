import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const About = ({navigation, route}) => {

  const {id, name} = route.params


  const visitHome = () => {
    //navigation.navigate("Home")
    navigation.goBack()
  }

  return (
    <View style={s.container}>
      <Text>Page About and the name I am passing from home is {name}</Text>
      <Pressable style={{marginTop: 10,padding: 5, backgroundColor: "red"}} onPress={() => visitHome()}>
        <Text style={{fontSize: 15}}>Go to Home</Text>
      </Pressable>
    </View>
  )
}

export default About

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})