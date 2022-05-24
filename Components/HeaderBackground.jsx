import { View, Image } from 'react-native';

export default function HeaderBackground({color}) {

    return (
        <View style={{height: "100%"}}>
            {
                color ? <View style={{backgroundColor: 'black', height: "100%"}}></View> 
                : <Image source={require('../assets/backgroundHeader.jpeg')} style={{
                    height: "100%",
                    width: "100%",
                    resizeMode: 'stretch',
                }}>
                </Image>
            } 
        </View> 
    );
}