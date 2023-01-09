import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import AccountStack from '../AccountStack';
import FavoritesStack from '../FavoritesStack';
import PokedexStack from '../PokedexStack';

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
	return (
		<Tab.Navigator
			initialRouteName='Pokedex'
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tab.Screen
				name='Account'
				component={AccountStack}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Icon name='user' size={size} color={color} />
					),
					tabBarLabel: 'Cuenta',
				}}
			/>
			<Tab.Screen
				name='Pokedex'
				component={PokedexStack}
				options={{
					tabBarIcon: ({ size }) => (
						<Image
							source={require('../../assets/pokeball.png')}
							style={{ width: 75, height: 74, marginBottom: 35 }}
						/>
					),
					tabBarLabel: '',
				}}
			/>
			<Tab.Screen
				name='Favorites'
				component={FavoritesStack}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Icon name='heart' size={size} color={color} />
					),
					tabBarLabel: 'Favoritos',
				}}
			/>
		</Tab.Navigator>
	);
};

export default NavigationTabs;
