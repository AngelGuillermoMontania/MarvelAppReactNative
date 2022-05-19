import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

const ButtonBack = () => {

    return (
        <MaterialCommunityIcons name="arrow-back" size={25} style={styles.icon}/>     
    );
};

const styles = StyleSheet.create({
    icon: {
        color: 'white',
    }
});

export default ButtonBack;