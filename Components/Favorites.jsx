import { useState } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import CharacterCard from './CharacterCard';
import { useSelector } from 'react-redux';

const theme = {
    roundness: 1,
    colors: {
      primary: '#3498db',
      accent: '#f1c40f',
    },
  };

export default function Favorites() {
    
    const [ isLoading, setLoading ] = useState(false)
    const allFavorites = useSelector((state) => state.favorite)

    return (
        <View style={styles.containHome}>
            {
                isLoading ? 
                    <ActivityIndicator size="large" color="#00ff00" />
                : <View>                
                        <FlatList 
                            data={allFavorites}
                            style={styles.containHome}
                            keyExtractor={({id}) => id.toString()}
                            renderItem={({item}) => 
                                <CharacterCard
                                    id={item.id}
                                    image={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                                    name={item.name}
                                />
                            }
                        />
                   
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    containHome: {
        backgroundColor: "black"
    },
    search: {
        height: 20
    }
})