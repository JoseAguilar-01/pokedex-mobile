import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PokemonCard from '../../components/PokemonCard';
import useAuth from '../../hooks/useAuth';
import { getItemsObject } from '../../libs/storage';

const FavoritesView = () => {
	const [pokemons, setPokemons] = useState([]);

	useFocusEffect(
		useCallback(() => {
			getFavorites();
		}, [])
	);

	const { auth } = useAuth();

	const getFavorites = async () => {
		const result = (await getItemsObject('FAVORITE_POKEMONS')) ?? '[]';
		const favoritePokemons = JSON.parse(result);

		setPokemons(favoritePokemons);
	};

	return auth.username ? (
		<SafeAreaView>
			<FlatList
				data={pokemons}
				renderItem={({ item }) => <PokemonCard item={item} />}
				showsVerticalScrollIndicator={false}
				keyExtractor={item => String(item.id)}
				numColumns={2}
				style={styles.list}
			/>
		</SafeAreaView>
	) : (
		<View style={styles.noLoggedContainer}>
			<Text style={styles.noLoggedText}>Incia sesión</Text>
			<Text style={styles.noLoggedText}>para ver tus favoritos</Text>
		</View>
	);
};

const styles = {
	list: {
		paddingHorizontal: 10,
		marginBottom: 60,
	},
	noLoggedContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	noLoggedText: {
		fontSize: 20,
		fontWeight: '400',
	},
};

export default FavoritesView;
