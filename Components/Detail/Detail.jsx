import { useEffect, useState } from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, ImageBackground } from "react-native";
import apiParams from "../../config";
import Information from "./Information"
import Comics from "./Comics"
import axios from "axios";
import FavoriteButton from "./FavoriteButton";
import HeaderBackground from "../HeaderBackground";


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
				headerRight: () => <FavoriteButton data={data}/>,
				tabBarBackground: () => <HeaderBackground />,
				tabBarLabelStyle: {fontFamily: 'Marvel', fontWeight: 'bold'}
			}}
		>
			<Tab.Screen
				name="Information"
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="information-circle" color={color} size={size} />
					),
					headerTitleStyle: {
						fontFamily: 'Marvel',
						fontSize: 22,
						color: 'white',
						fontWeight: 'bold'
					},
					headerTitleAlign: 'left',
					headerBackground: () => <HeaderBackground color={'#000000'}/>,
				}}
				
			>
				{
					() => (isLoading ?
						<ImageBackground source={require('../../assets/Escudo1.jpg')} resizeMode="cover" style={{height: "100%"}}>
							<ActivityIndicator size="large" color="#00ff00" style={{margin: 50}}/>
						</ImageBackground>
						: <Information
							image={`${data?.thumbnail?.path}.${data.thumbnail.extension}`}
							name={data?.name}
							description={data?.description}
							numSeries={data?.series?.available}
							numEvents={data?.events?.available}
							numStories={data?.stories?.available}
						/>)
				}

			</Tab.Screen>
			<Tab.Screen
				name="Comics"
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="book" color={color} size={size} />
					),
					headerTitleStyle: {
						fontFamily: 'Marvel',
						fontSize: 22,
						color: 'white',
						fontWeight: 'bold'
					},
					headerTitleAlign: 'left',
					headerBackground: () => <HeaderBackground color={'#000000'}/>,
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