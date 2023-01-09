import { useEffect, useState } from 'react';
import {
	ActivityIndicator,
	StyleSheet,
	View,
	FlatList,
	Pressable,
	Text,
} from 'react-native';

import { getPokemonDetails, getPokemons } from '../../api/pokemon';
import PokemonCard from '../PokemonCard';

const PokemonList = () => {
	const [pokemons, setPokemons] = useState({});
	const [pokemonsListWithDetails, setPokemonsListWithDetails] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		listPokemons();
	}, []);

	const listPokemons = async (prev, next) => {
		setLoading(true);

		const pokemonsObject = await getPokemons(prev, next);

		const pokemonListWithDetails = [];

		for await (const pokemon of pokemonsObject.pokemonsList) {
			const pokemonDetails = await getPokemonDetails(pokemon.url);

			pokemonListWithDetails.push({
				id: pokemonDetails.id,
				name: pokemonDetails.name,
				type: pokemonDetails.types[0].type.name,
				types: pokemonDetails.types,
				order: pokemonDetails.order,
				stats: pokemonDetails.stats,
				image: pokemonDetails.sprites.other['official-artwork'].front_default,
			});
		}

		setPokemons(pokemonsObject);
		setPokemonsListWithDetails(pokemonListWithDetails);

		setLoading(false);
	};

	return (
		<View>
			{pokemons?.prev && (
				<View style={styles.pressableContainer}>
					<Pressable
						onPress={() => listPokemons(pokemons?.prev, null)}
						style={styles.paginationButton}
					>
						<Text style={styles.paginationButtonText}>
							Volver a la página previa
						</Text>
					</Pressable>
				</View>
			)}

			<FlatList
				data={pokemonsListWithDetails}
				renderItem={({ item }) => <PokemonCard item={item} />}
				showsVerticalScrollIndicator={false}
				keyExtractor={item => String(item.id)}
				numColumns={2}
				onEndReached={() =>
					pokemons?.next && listPokemons(null, pokemons?.next)
				}
				style={styles.list}
			/>

			{loading && (
				<ActivityIndicator
					color='blue'
					size={65}
					style={[
						styles.spinner,
						{ bottom: pokemonsListWithDetails.length > 0 ? 400 : -250 },
					]}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	pressableContainer: {
		alignItems: 'center',
	},
	list: {
		paddingHorizontal: 10,
		marginBottom: 60,
	},
	spinner: {
		position: 'relative',
	},
	paginationButton: {
		marginBottom: 20,
		padding: 10,
		borderRadius: 10,
		backgroundColor: '#1F8DF5',
	},
	paginationButtonText: {
		color: 'white',
		fontWeight: '600',
	},
});

export default PokemonList;
