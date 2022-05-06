import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import CharacterCard from './CharacterCard';
import axios from 'axios';
import apiParams from "../config.js"
const { baseURL, ts, apiKey, hash } = apiParams

export default function Home() {
    
    const [ isLoading, setLoading ] = useState(true)
    const [ data, setData ] = useState([])

    useEffect(() => {
        axios.get(`${baseURL}/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`)
        .then(response => setData(response.data.data.results))
        .catch(error => console.log(error.message))
        .finally(() => setLoading(false))
    }, [])


    return (
        <View style={styles.containHome}>
            {
                isLoading ? 
                    <ActivityIndicator size="large" color="#00ff00" />
                : <FlatList 
                    data={data}
                    keyExtractor={({id}) => id.toString()}
                    renderItem={({item}) => 
                        <CharacterCard
                            id={item.id}
                            image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`}
                            name={item.name}
                        />}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    containHome: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})