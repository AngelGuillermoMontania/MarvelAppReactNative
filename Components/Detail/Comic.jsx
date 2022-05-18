import { View, Text, Image, StyleSheet } from 'react-native';

export default function Comic({ name, image }) {
    return (
        <View style={styles.containComic}>
            <View style={styles.containImage}>
                <Image 
                    source={{uri: image}}
                    style={styles.image}
                />
            </View>
            <Text>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containComic: {
        width: 400,
        height: "100%"
    },
    containImage: {
        height: 350,
        width: 300
    },
    image: {
        height: "100%",
        width: "100%"
    }
})