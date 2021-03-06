import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, FlatList, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import CharacterCard from './CharacterCard';
import axios from 'axios';
import apiParams from "../config.js";
import { Searchbar } from 'react-native-paper';
const { baseURL, ts, apiKey, hash } = apiParams

export default function Home() {
    
    const [ isLoading, setLoading ] = useState(true)
    const [ search, setSearch ] = useState("")
    const [ data, setData ] = useState([])
    const [ offset, setOffset] = useState(20)
    const [ refresh, setRefresh ] = useState(false)

    useEffect(() => {
        axios.get(`${baseURL}/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`)
        .then(response => setData(response.data.data.results))
        .catch(error => console.log(error.message))
        .finally(() => setLoading(false))
    }, [refresh])

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
                    <ImageBackground source={require('../assets/logoMarvel.png')} resizeMode="cover" style={{height: "100%"}}>
                        <ActivityIndicator size="large" color="#00ff00" style={{margin: 100}}/>
                    </ImageBackground>
                : <View>
                    <ImageBackground source={require('../assets/Shield.jpg')} resizeMode="cover" >
                       
                        <StatusBar
                            animated={true}
                            showHideTransition='fade'
                            hidden={true}
                        />
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
                        {
                            data.length !== 0 ? <FlatList 
                                data={data}
                                keyExtractor={({id}) => id.toString()}
                                onEndReached={() => {
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
                            : <ImageBackground source={require('../assets/Shield.jpg')} resizeMode="cover" style={{height: "100%"}}>
                                <Text style={styles.textNotSearch}>Character   not   found</Text>
                                <TouchableOpacity style={styles.refresh} onPress={() => setRefresh(!refresh)}>
                                    <Text style={styles.textButton}>REFRESH</Text>
                                </TouchableOpacity>
                            </ImageBackground>
                        }
                    </ImageBackground>  
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    containSearch: {
        backgroundColor: "black",
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
    },
    textNotSearch: {
        fontFamily: 'Avenger',
        color: 'white',
        textAlign: 'center',
        fontSize: 60,
        width: "90%",
        marginVertical: '20%',
        textShadowColor: 'black',
        textShadowOffset: {
            width: 0,
            height: 0
        },
        textShadowRadius: 20,
        textTransform: 'uppercase',
        lineHeight: 90
    },
    refresh: {
        position: 'absolute',
        bottom: "40%",
        backgroundColor: 'red',
        left: '50%',
        width: "50%",
        zIndex: 9999,
        padding: 15,
        borderRadius: 10
    },
    textButton: {
        color: 'white',
        textAlign: 'center'
    }
})