/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Menu } from './screens/menu/Menu'
import { Perfil } from './screens/perfil/Perfil'
import { Calculadora } from './screens/calculadora/Calculadora'
import { Clima } from './screens/clima/Clima'
import { Log } from './screens/log/Log'
import { Navegador } from './screens/navegador/Navegador'
import { Noticias } from './screens/noticias/Noticias'

const Stack = createNativeStackNavigator()

function App(){
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
       <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Stack.Navigator initialRouteName='Menu' screenOptions={{headerShown: false, headerLeft: null, animation: 'fade'}}>
        
        <Stack.Screen name='Calculadora' component={Calculadora}/>
        <Stack.Screen name='Clima' component={Clima}/>
        <Stack.Screen name='Log' component={Log}/>
        <Stack.Screen name='Menu' component={Menu}/>
        <Stack.Screen name='Navegador' component={Navegador}/>
        <Stack.Screen name='Noticias' component={Noticias}/>
        <Stack.Screen name='Perfil' component={Perfil}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
