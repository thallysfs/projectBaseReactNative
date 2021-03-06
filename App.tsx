import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components'

//instalar fontes, importar e configurar
// import {
//   useFonts,
//   Inter_400Regular,
//   Inter_500Medium
// } from '@expo-google-fonts/inter'
// import {
//   Archivo_400Regular,
//   Archivo_500Medium,
//   Archivo_600SemiBold
// } from '@expo-google-fonts/archivo'

import { Routes } from './src/routes'

import theme from './src/styles/theme';

export default function App() {

//   const [fontsLoaded] = useFonts({
//     Inter_400Regular,
//     Inter_500Medium,
//     Archivo_400Regular,
//     Archivo_500Medium,
//     Archivo_600SemiBold
//   });

  // if(!fontsLoaded) {
  //   return <AppLoading />
  // }

  return (
	  //para que a lib gestureHandle funcione preciso envolver essa tag
	<GestureHandlerRootView style={{ flex: 1}}>
		<ThemeProvider theme={theme}>   
		  <Routes />
		</ThemeProvider>
	</GestureHandlerRootView>
  );
}

