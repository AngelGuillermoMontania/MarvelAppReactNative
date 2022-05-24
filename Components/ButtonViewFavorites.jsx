import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import { Pressable, View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ButtonViewFavorites() {

    const navigation = useNavigation()

    return (
        <View>
            <Pressable style={styles.button} onPress={() => navigation.navigate("FAVORITES")}>
                {
                    <MaterialCommunityIcons name="bookmarks" size={18} style={styles.icon}/>
                }
                <Text style={styles.text}>Favorites</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        backgroundColor: '#00000040',
        padding: 5,
        borderRadius: 3
    },
    text: {
        color: 'white',
        fontSize: 10
    },
    icon: {
        color: 'white'
    }
});