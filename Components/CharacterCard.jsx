import { useNavigation } from '@react-navigation/native';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function CharacterCard({ image, name, id }) {

    const navigation = useNavigation()

    return (
        <TouchableOpacity 
            style={styles.containCard}
            onPress={() => navigation.navigate('Detail', {id})}
        >
            <Image
                style={styles.image}
                source={image}
            />
            <Text style={styles.font}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containCard: {

    }
})