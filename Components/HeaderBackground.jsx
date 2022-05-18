import { View, StyleSheet, Text } from 'react-native';

export default function HeaderBackground() {

    return (
        <View style={styles.containHome}>
        </View>
    );
}

const styles = StyleSheet.create({
    containHome: {
        backgroundColor: "red",
        height: "100%"
    },
})