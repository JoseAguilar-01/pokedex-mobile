import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import FavoriteButton from '../../components/FavoriteButton';
import PokemonHeader from '../../components/PokemonHeader';
import PokemonStats from '../../components/PokemonStats';
import PokemonType from '../../components/PokemonType';
import useAuth from '../../hooks/useAuth';

const PokemonView = ({ route, navigation }) => {
	const [pokemon, setPokemon] = useState({});

	useEffect(() => {
		setPokemon(route.params);
		navigation.setOptions({
			title: `#${`${route.params.id}`.padStart(3, 0)}`,
			headerLeft: () => (
				<Icon
					name='arrow-left'
					size={25}
					color='#fff'
					style={styles.headerLeftIcon}
					onPress={navigation.goBack}
				/>
			),
			headerRight: () =>
				auth.username && <FavoriteButton pokemon={route.params} />,
			headerTintColor: 'white',
		});
	}, []);

	const { auth } = useAuth();

	const { image, name, type, types, order, stats } = pokemon;

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<PokemonHeader image={image} name={name} type={type} order={order} />
			<PokemonType types={types} />
			<PokemonStats stats={stats} type={type} />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	headerLeftIcon: {
		marginRight: 20,
	},
	container: { flex: 1 },
});

export default PokemonView;
