import { StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Test = () => {
  return (
    <View>
      <Text>Test</Text>

      <Button onPress={()=>Alert.alert("Hola")}>
        Hola
      </Button>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})