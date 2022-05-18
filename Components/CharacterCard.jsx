import { useNavigation } from '@react-navigation/native';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function CharacterCard({ image, name, id }) {

    const navigation = useNavigation()

    return (
        <TouchableOpacity 
            style={styles.containCard}
            onPress={() => navigation.navigate('Detail', {id})}
        >
            <Text style={styles.font}>{name}</Text>
            <View style={styles.containImage}>
                <Image
                    style={styles.image}
                    source={{uri: image}}
                    resizeMode="stretch"
                />
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    containCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        height: 100,
        width: "95%",
        marginHorizontal: "2.5%",
        textAlign: "center",
        marginVertical: 20,
        textAlignVertical: "center",
        backgroundColor: "red",
        borderRadius: 15
    },
    containImage: {
        width: "60%",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 50,
    },
    font: {
        textAlign: "center",
        width: "40%",
        color: "white",
        fontFamily: 'Marvel',
        fontWeight: 'bold',
        fontSize: 20,
        textShadowColor: 'white',
        textShadowOffset: {
            width: 0,
            height: 0
        },
        textShadowRadius: 20,
        fontStyle: 'italic'
    }
})