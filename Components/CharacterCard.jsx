import { useNavigation } from '@react-navigation/native';
import { Text, Image, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function CharacterCard({ image, name, id }) {

    const navigation = useNavigation()

    return (
        <TouchableOpacity 
            style={styles.containCard}
            onPress={() => navigation.navigate('DETAIL', { id })}
        >
        <ImageBackground source={require('../assets/backgroundCard.jpg')} resizeMode="stretch" style={styles.background} imageStyle={{borderRadius: 20}}>
            <View style={styles.containImage}>
                <Image
                    style={styles.image}
                    source={{uri: image}}
                    resizeMode="stretch"
                />
            </View>
            <Text style={styles.font}>{name}</Text>
        </ImageBackground>   
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containCard: {
        height: 70,
        marginLeft: "5%",
        textAlign: "center",
        marginVertical: 20,
        textAlignVertical: "center",
        borderRadius: 50
    },
    background: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "5%",
        width: "95%",
        borderRadius: 50
    },
    containImage: {
        position: 'relative',
        height: 75
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 50,
        position: 'absolute',
        bottom: 0,
        left: -20
    },
    font: {
        textAlign: "center",
        width: "85%",
        color: "white",
        fontFamily: 'Marvel',
        fontWeight: 'bold',
        fontSize: 22,
        textShadowColor: 'white',
        textShadowOffset: {
            width: 0,
            height: 0
        },
        textShadowRadius: 20,
        fontStyle: 'italic'
    }
})