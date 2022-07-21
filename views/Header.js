import { StyleSheet, Text, View } from 'react-native'
import {Button} from "react-native-paper"
import React from 'react'

const Header = ({navigation, route}) => {
  return (
    <Button color={"white"} icon={"plus-circle"} onPress={() => navigation.navigate("Home")}>
        Crear cliente
    </Button>
  )
}

export default Header

const styles = StyleSheet.create({})