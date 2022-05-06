import * as React from "react"
import { useNavigation } from '@react-navigation/native';
import { Text,  View, ScrollView, Image, StyleSheet } from 'react-native';

export default function Information({ image, name, description }) {

    const navigation = useNavigation()

    console.log(image)

    return (
        
        <ScrollView>
            <View>
                <Text>{name}</Text>
                </View>
            <View style={styles.full}>
                    <Image 
                        style={styles.image}
                        source={{uri: image}}
                    />

            </View>
              <View style={styles.full}>
                <Text>{description}</Text>

              </View>

              
                

           

           

           
        </ScrollView>

        
    );
}

const styles = StyleSheet.create({
    image: {
        height: "100%",
        width: "100%"
    },
    full: {
        width: "100%",
        height: 300
    }
})