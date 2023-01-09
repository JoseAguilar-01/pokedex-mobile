import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PokedexView from '../../views/PokedexView';
import PokemonView from '../../views/PokemonView';

const Stack = createNativeStackNavigator();

const PokedexStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='PokedexView'
				component={PokedexView}
				options={{
					headerShown: false,
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

export default PokedexStack;
