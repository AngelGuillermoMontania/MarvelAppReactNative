import * as React from "react"
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';

export default function Information({ image, name, description }) {

    const navigation = useNavigation()

    return (

        <ScrollView>
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
        </ScrollView>


    );
}

const styles = StyleSheet.create({
    containImage: {
        height: 300,
        width: "100%",
        
    },
    image: {
        height: "90%",
        width: "90%",
        marginHorizontal: "5%",
    },
    title: {
        color: "red",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 5,
        textShadowColor: "white",
        fontWeight: "bold",
    },
    description: {
        color: "red",
        fontSize: 15,
        textAlign: "center",
        marginBottom: 20,
        textShadowColor: "white",
        fontWeight: "300",
        fontStyle: "italic"
    }
})