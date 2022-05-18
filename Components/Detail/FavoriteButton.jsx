import React, { useState, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import { Pressable, View, StyleSheet, Image } from 'react-native';
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
                        <MaterialCommunityIcons name="star" size={30} />
                        : <MaterialCommunityIcons name="star-outline" size={30} />
                }
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginRight: 15,
    },
});

export default FavoriteButton;