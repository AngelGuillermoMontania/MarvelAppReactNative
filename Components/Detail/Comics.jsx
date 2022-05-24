import { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList, StyleSheet, ImageBackground } from 'react-native';
import Comic from './Comic';
import axios from "axios"
import apiParams from "../../config.js"
const { baseURL, ts, apiKey, hash } = apiParams

export default function Comics({ listComics }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const promiseArray = listComics.map(oneComic => axios.get(oneComic.resourceURI, {
            params: {
                ts,
                apikey: apiKey,
                hash
            }
        }))
        Promise.all(promiseArray)
            .then(responses => {
                setData(responses.map(result => result?.data?.data?.results[0]))
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    return (
        <View style={styles.containFlat}>
            <ImageBackground source={require('../../assets/Shield.jpg')} resizeMode="cover" style={{ height: "100%" }}>
                {
                    isLoading ?
                        <ActivityIndicator size="large" color="#00ff00" style={{ margin: 50 }} />
                    : <FlatList
                        contentContainerStyle={{ alignItems: 'center' }}
                        data={data}
                        keyExtractor={({ id }) => id.toString()}
                        pagingEnabled
                        horizontal
                        renderItem={({ item }) => (
                            <Comic
                                key={item.id}
                                name={item.title}
                                image={`${item?.thumbnail?.path}.${item.thumbnail.extension}`}
                            />
                        )}
                    />
                }
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    containFlat: {
        width: '100%',
        backgroundColor: 'black',
        height: '100%'
    }
})