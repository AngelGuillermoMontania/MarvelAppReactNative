import { useNavigation } from '@react-navigation/native';
import { Text,  View } from 'react-native';

export default function Comics({ image, name }) {

    const navigation = useNavigation()

    return (
        <View>
            <Text>Hello</Text>
        </View>
    );
}
