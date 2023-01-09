import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FavoritesView from '../../views/FavoritesView';
import PokemonView from '../../views/PokemonView';

const Stack = createNativeStackNavigator();

const FavoritesStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='FavoritesList'
				component={FavoritesView}
				options={{
					title: 'Favoritos',
				}}
			/>
			<Stack.Screen
				name='PokemonView'
				component={PokemonView}
				options={{
					title: '',
					headerTransparent: true,
				}}
			/>
		</Stack.Navigator>
	);
};

export default FavoritesStack;
