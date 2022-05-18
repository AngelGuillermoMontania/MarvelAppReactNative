import { useEffect, useState } from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator } from "react-native";
import apiParams from "../../config";
import Information from "./Information"
import Comics from "./Comics"
import axios from "axios";
import FavoriteButton from "./FavoriteButton";


const Tab = createBottomTabNavigator();


export default function Detail({ route }) {

	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const { ts, apiKey, hash, baseURL } = apiParams;

	useEffect(() => {
		axios.get(`${baseURL}/v1/public/characters/${route.params.id}?ts=${ts}&apikey=${apiKey}&hash=${hash}`)
			.then(response => setData(response.data.data.results[0]))
			.catch(error => console.log(error.message))
			.finally(() => setLoading(false))
	}, [])


	return (
		<Tab.Navigator
			initialRouteName="Information"
			screenOptions={{
				activeTintColor: 'blue',
				headerRight: () => <FavoriteButton data={data}/>
			}}
		>
			<Tab.Screen
				name="Information"
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="information-circle" color={color} size={size} />
					)
				}}
			>
				{
					() => (isLoading ?
							<ActivityIndicator size="large" color="#00ff00" />
						: <Information
							image={`${data?.thumbnail?.path}.${data.thumbnail.extension}`}
							name={data?.name}
							description={data?.description}
						/>)
				}

			</Tab.Screen>
			<Tab.Screen
				name="Comics"
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="book" color={color} size={size} />
					)
				}}
			>
				{
					() => (isLoading ? 
						<ActivityIndicator size="large" color="#00ff00" />
					: <Comics
						listComics={data?.comics?.items}
					/>)
				}
			</Tab.Screen>
		</Tab.Navigator>
	);
}