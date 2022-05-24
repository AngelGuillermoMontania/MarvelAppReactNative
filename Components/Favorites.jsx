import { View, StyleSheet, FlatList, ImageBackground, Text } from 'react-native';
import CharacterCard from './CharacterCard';
import { useSelector } from 'react-redux';

export default function Favorites() {

    const allFavorites = useSelector((state) => state.favorite)

    return (
        <View style={styles.containHome}>
            {
                allFavorites.length === 0 ?
                    <ImageBackground source={require('../assets/Shield.jpg')} resizeMode="cover" style={{ height: "100%" }}>
                        <Text style={styles.text}>You   have   no   favorites</Text>
                    </ImageBackground>
                : <View>
                    <ImageBackground source={require('../assets/Shield.jpg')} resizeMode="cover" style={{ height: "100%" }}>
                        <FlatList
                            data={allFavorites}
                            keyExtractor={({ id }) => id.toString()}
                            renderItem={({ item }) =>
                                <CharacterCard
                                    id={item.id}
                                    image={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                                    name={item.name}
                                />
                            }
                        />
                    </ImageBackground>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    search: {
        height: 20
    },
    text: {
        fontFamily: 'Avenger',
        color: 'white',
        textAlign: 'center',
        fontSize: 60,
        marginVertical: 100,
        textShadowColor: 'black',
        textShadowOffset: {
            width: 0,
            height: 0
        },
        textShadowRadius: 20,
        textTransform: 'uppercase',
        width: "90%",
        lineHeight: 90
    }
})