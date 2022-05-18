import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';
import Comic from './Comic';
import axios from "axios"
import apiParams from "../../config.js"
const { baseURL, ts, apiKey, hash } = apiParams

export default function Comics({ listComics }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const promiseArray = listComics.map(oneComic => axios.get(oneComic.resourceURI,{
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
        <View>
            {
                isLoading ? 
                    <ActivityIndicator size="large" color="#00ff00" />
                : <FlatList
                contentContainerStyle={{alignItems: 'center'}}
                data={data}
                keyExtractor={({ id }) => id.toString()}
                horizontal
                pagingEnabled
                renderItem={({ item }) => (
                  <Comic 
                    key={item.id}
                    name={item.title} 
                    image={`${item?.thumbnail?.path}.${item.thumbnail.extension}`}  
                  />
            )}
          />
            }
        </View>
    )
}