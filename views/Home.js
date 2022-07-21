import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const Home = ({navigation}) => {

  const client = {
    id: 200,
    name: "Albin",
  }

  const visitAbout = () => {
    navigation.navigate("About", client)
  }
  
  return (
    <View style={s.container}>
      <Text>Home</Text>
      <Pressable style={{marginTop: 10,padding: 5, backgroundColor: "red"}} onPress={() => visitAbout()}>
        <Text style={{fontSize: 15}}>Go to About</Text>
      </Pressable>

      <Pressable style={{marginTop: 10,padding: 5, backgroundColor: "red"}} onPress={() => navigation.navigate("Test")}>
        <Text style={{fontSize: 15}}>Go to Test</Text>
      </Pressable>
    </View>
  )
}

export default Home

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})