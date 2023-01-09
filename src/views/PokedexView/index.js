import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PokemonList from '../../components/PokemonList';

const PokedexView = () => {
	return (
		<SafeAreaView style={styles.container}>
			<PokemonList />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
	},
});

export default PokedexView;
