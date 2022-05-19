import * as React from "react"
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, Image, StyleSheet, ImageBackground } from 'react-native';

export default function Information({ image, name, description, numSeries, numEvents, numStories }) {

    const navigation = useNavigation()

    return (

        <ScrollView>
            <ImageBackground source={require('../../assets/Escudo1.jpg')} resizeMode="cover" >
                <Text
                    allowFontScaling={true}
                    style={styles.title}
                >{name}</Text> 
                <View style={styles.containImage}>
                    <Image
                        style={styles.image}
                        source={{ uri: image }}
                        resizeMode="stretch"
                    />
                </View>
                <Text allowFontScaling={true} style={styles.description}>{description}</Text>
                <Text allowFontScaling={true} style={styles.description}>Number of series: {numSeries}</Text>
                <Text allowFontScaling={true} style={styles.description}>Number of events: {numEvents}</Text>
                <Text allowFontScaling={true} style={styles.description}>Number of stories: {numStories}</Text>
            </ImageBackground>
        </ScrollView>


    );
}

const styles = StyleSheet.create({
    title: {
        color: "white",
        fontSize: 70,
        fontFamily: 'Avenger',
        textAlign: "center",
        marginVertical: 10,
        textShadowColor: 'white',
        textShadowOffset: {
            width: 0,
            height: 0
        },
        textShadowRadius: 30,
        letterSpacing: 2
    },
    containImage: {
        height: 350,
        width: "100%",

    },
    image: {
        height: "100%",
        width: "90%",
        marginHorizontal: "5%",
    },
    description: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 20,
        fontWeight: "bold",
        fontFamily: 'Marvel'
    }
})