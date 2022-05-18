import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import CharacterCard from './CharacterCard';
import axios from 'axios';
import apiParams from "../config.js";
import { Searchbar, DefaultTheme } from 'react-native-paper';
const { baseURL, ts, apiKey, hash } = apiParams

const theme = {
    roundness: 30,
    colors: {
      primary: '#FFFFFF',
      accent: '#f1c40f',
    },
  };

export default function Home() {
    
    const [ isLoading, setLoading ] = useState(true)
    const [ search, setSearch ] = useState("")
    const [ data, setData ] = useState([])
    const [ offset, setOffset] = useState(20)

    useEffect(() => {
        axios.get(`${baseURL}/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`)
        .then(response => setData(response.data.data.results))
        .catch(error => console.log(error.message))
        .finally(() => setLoading(false))
    }, [])

    function addCharacters () {
        axios.get(`${baseURL}/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}&offset=${offset}`)
        .then(response => setData([...data, ...response.data.data.results]))
        .catch(error => console.log(error.message))
        .finally(() => setLoading(false))
        
    }

    function searchCharacter() {
        if(search) {
            setLoading(true);
            axios.get(`${baseURL}/v1/public/characters`, {
            params: {
                ts,
                apikey: apiKey,
                hash,
                nameStartsWith: search,
            }
            })
            .then(response => setData(response.data.data.results))
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
        }
    }

    return (
        <View >
            {
                isLoading ? 
                    <ActivityIndicator size="large" color="#00ff00" />
                : <View>
                    <View style={styles.containSearch}>
                        <Searchbar
                            placeholder="Search for character..."
                            onChangeText={value => setSearch(value)}
                            value={search}
                            onIconPress={searchCharacter}
                            onSubmitEditing={searchCharacter}
                            style={styles.search}
                            inputStyle={{
                                fontFamily: 'Marvel',
                                fontWeight: 'bold',
                            }}
                        />
                    </View>
                    
                        <FlatList 
                            data={data}
                            keyExtractor={({id}) => id.toString()}
                            style={styles.containHome}
                            onEndReached={() => {
                                console.log("END")
                                addCharacters()
                                setOffset(offset + 20)
                            }}
                            onEndReachedThreshold={2}
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
    containSearch: {
        backgroundColor: "black",
    },
    containHome: {
        backgroundColor: "black"
    },
    search: {
        height: 40,
        width: "90%",
        marginHorizontal: "5%",
        marginVertical: 10,
        borderRadius: 5,
        borderColor: 'red',
        borderStyle: 'solid',
        borderWidth: 1
    }
})