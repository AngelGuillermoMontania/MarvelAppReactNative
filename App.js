import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react'
import functionStore from './Redux/Store';
const { store, persistor } = functionStore()
import { Provider } from 'react-redux';
import Home from './Components/Home'
import Detail from "./Components/Detail/Detail"
import Favorites from './Components/Favorites';
import ButtonViewFavorites from './Components/ButtonViewFavorites';
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo'
import { BlurView } from 'expo-blur'
import { ActivityIndicator, StyleSheet } from "react-native";
import HeaderBackground from './Components/HeaderBackground';
import { color } from 'react-native-reanimated';
import ButtonBack from './Components/ButtonBack';
import { useEffect, useState } from 'react';

const Stack = createStackNavigator();

export default function App() {

    let [fontsLoaded] = useFonts({
        'Marvel': require('./assets/Fonts/Marvel-Regular.ttf'),
        'Venom': require('./assets/Fonts/Venom.ttf'),
        'Avenger': require('./assets/Fonts/Avenger-Regular.ttf')
    })


    return (
        <Provider store={store} >
            <PersistGate loading={null} persistor={persistor} >

                <NavigationContainer>
                    <Stack.Navigator>
                        
                        <Stack.Screen name="MARVEL" options={fontsLoaded && {
                            headerTitleStyle: {
                                fontFamily: 'Marvel',
                                fontSize: 40,
                                fontWeight: 'bold',
                                letterSpacing: -4,
                                color: 'white',
                            },
                            headerRight: () => <ButtonViewFavorites />,
                            headerTitleAlign: 'center',
                            headerBackground: () => <HeaderBackground />,
                        }}>
                            {
                                () => (fontsLoaded ? <Home />
                                    : <ActivityIndicator size="large" color="#00ff00" />)
                            }
                        </Stack.Screen>
                        <Stack.Screen name="DETAIL" options={ fontsLoaded && {
                            headerTitleStyle: {
                                fontFamily: 'Marvel',
                                fontSize: 40,
                                fontWeight: 'bold',
                                letterSpacing: -4,
                                color: 'white',
                            },
                            headerBackImage: () => <ButtonBack />,
                            headerTitleAlign: 'center',
                            headerBackground: () => <HeaderBackground />,
                        }}>
                            {
                                (props) => (fontsLoaded ? <Detail {...props} />
                                    : <ActivityIndicator size="large" color="#FF0000" />)
                            }
                        </Stack.Screen>
                        <Stack.Screen name="FAVORITES" options={ fontsLoaded && {
                            headerTitleStyle: {
                                fontFamily: 'Marvel',
                                fontSize: 40,
                                fontWeight: 'bold',
                                letterSpacing: -4,
                                color: 'white',
                            },
                            headerBackImage: () => <ButtonBack />,
                            headerTitleAlign: 'center',
                            headerBackground: () => <HeaderBackground />,
                        }}>
                            {
                                (props) => (fontsLoaded ? <Favorites {...props} />
                                    : <ActivityIndicator size="large" color="#FF0000" />)
                            }
                        </Stack.Screen>
                    </Stack.Navigator>
                </NavigationContainer>

            </PersistGate>
        </Provider>
    );

}