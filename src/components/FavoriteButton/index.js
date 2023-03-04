import { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { FAVORITE_POKEMONS } from '../../constants';
import useAuth from '../../hooks/useAuth';
import { getItemsObject, storeItemsObject } from '../../libs/storage';

const FavoriteButton = ({ pokemon }) => {
	const [listFavoritePokemons, setListFavoritePokemons] = useState([]);
	const [solidIcon, setSolidIcon] = useState(false);

	const { auth } = useAuth();

	useEffect(() => {
		if (auth.username) {
			getFavoritePokemons();
		}
	}, []);

	const getFavoritePokemons = async () => {
		const result = (await getItemsObject(FAVORITE_POKEMONS)) ?? '[]';
		const favoritePokemons = JSON.parse(result);

		setListFavoritePokemons(favoritePokemons);

		setSolidIcon(favoritePokemons.find(favorite => favorite.id === id) && true);
	};

	const addFavorite = async () => {
		await storeItemsObject(
			FAVORITE_POKEMONS,
			JSON.stringify([...listFavoritePokemons, pokemon])
		);

		setListFavoritePokemons([...listFavoritePokemons, pokemon]);
		setSolidIcon(true);
	};

	const removeFavorite = async () => {
		const favoritePokemonsFiltered = listFavoritePokemons.filter(
			favoritePokemon => favoritePokemon.id !== id
		);

		await storeItemsObject(
			FAVORITE_POKEMONS,
			JSON.stringify(favoritePokemonsFiltered)
		);

		setListFavoritePokemons(favoritePokemonsFiltered);
		setSolidIcon(false);
	};

	const { id } = pokemon;

	return (
		<Icon
			name='heart'
			size={25}
			color='white'
			onPress={solidIcon ? removeFavorite : addFavorite}
			solid={solidIcon}
		/>
	);
};

export default FavoriteButton;
