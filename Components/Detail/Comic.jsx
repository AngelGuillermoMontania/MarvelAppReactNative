import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export default function Comic({ name, image }) {
    return (
        <View style={styles.containComic}>
            <View style={styles.containImage}>
                <Image 
                    source={{uri: image}}
                    style={styles.image}
                />
            </View>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containComic: {
        width: width,
        height: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containImage: {
        width: "65%",
        height: "80%",
        position: 'relative'
    },
    image: {
        height: "100%",
        width: "100%",
    },
    text: {
        color: 'white',
        fontFamily: 'Marvel',
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        width: "90%"
    }
})