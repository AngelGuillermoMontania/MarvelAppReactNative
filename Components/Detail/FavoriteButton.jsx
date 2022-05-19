import React, { useState, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import { Pressable, View, StyleSheet, Image, Text } from 'react-native';
import { addFavorite, deleteFavorite } from '../../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';

const FavoriteButton = ({ data }) => {

    const [isFavorite, setIsFavorite] = useState(false);
    const favorite = useSelector((state) => state.favorite)
    const dispatch = useDispatch()

    function handlePress () {
        if (isFavorite) {
            dispatch(deleteFavorite(data));
            setIsFavorite(false);   
        } else {
            dispatch(addFavorite(data));  
            setIsFavorite(true);
        }
    };

    return (
        <View>
            <Pressable style={styles.button} onPress={() => handlePress()}>
                {
                    favorite.find(element => element.id === data.id) ?
                        <MaterialCommunityIcons name="star" size={30} color='white' />
                        : <MaterialCommunityIcons name="star-outline" size={30} color='white' />
                }
                <Text style={styles.text}>Favorite</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginRight: 15,
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontFamily: 'Marvel',
        fontWeight: 'bold'
    }
});

export default FavoriteButton;