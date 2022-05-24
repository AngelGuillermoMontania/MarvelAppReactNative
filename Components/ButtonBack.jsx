import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

export default function ButtonBack() {
    return (
        <MaterialCommunityIcons name="arrow-back" size={25} style={styles.icon}/>     
    );
};

const styles = StyleSheet.create({
    icon: {
        color: 'white',
    }
});