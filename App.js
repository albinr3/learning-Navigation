import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Home from './views/Home';
import About from './views/About';
import Test from './views/Test';
import Header from './views/Header';


const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1774f2",
  }
}

console.log(theme)

const App= () => {
 

  return (
   <>
   <NavigationContainer>
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle:{
          backgroundColor: theme.colors.primary,
        },

        headerTintColor: theme.colors.surface,
        headerTitleAlign: "center"
      
      }}
    >
      <Stack.Screen
        name={"Home"}
        component={Home}
        options={{
          title: "Sweet Home",
          headerStyle: {
            backgroundColor: "orange"
          }
        }}

      />
      <Stack.Screen 
        name={"Test"}
        component={Test}
        //esta es la manera en que se pone un componente en una navegacion
        //en este caso pusimos un boton, tambien queriamos que el boton
        //lleve a otra pantalla, pero para eso necesitabamos
        //navigation, pero como el componente HEADER no es parte de los Stacks
        //entonces hubo que extraer navigation de los props y pasarlos al componente.
        //lo que pusimos como {...props} es para los otros props que se quieran pasar
        options= { ({navigation, route}) => ({
          headerLeft: ({props}) => <Header {...props} navigation={navigation} route={route}/>,
          
        })}
      />

      <Stack.Screen
        name={"About"}
        component={About}
        options={({route})=>(
          {
            title: route.params.name
          }
        )}
      />
    </Stack.Navigator>
   </NavigationContainer>
   </>
  );
};

const s = StyleSheet.create({

});

export default App;
