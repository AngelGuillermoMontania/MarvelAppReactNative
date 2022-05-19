import { View, StyleSheet, Text, Image } from 'react-native';

export default function HeaderBackground({color}) {

    return (
        <View style={{height: "100%"}}>
            {
                color ? <View style={{backgroundColor: 'black', height: "100%"}}></View> :
                <Image source={require('../assets/fondoRojo3.jpeg')} style={{
                    height: "100%",
                    width: "100%",
                    resizeMode: 'stretch',
                }}>
                </Image>
            } 
        </View>
        
    );
}