import { View, Text, Image, StyleSheet } from 'react-native';

import { getColorByPokemonType } from '../../utils/functions/getColorByPokemonType';

const PokemonHeader = ({ image, name, type, order }) => {
	return (
		<View style={styles.container}>
			<View
				style={[
					styles.bgContainer,
					{ backgroundColor: getColorByPokemonType(type) },
				]}
			/>
			<Image source={{ uri: image }} style={styles.pokemonImage} />
			<Text style={styles.nameText}>{name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingTop: 100,
	},
	bgContainer: {
		height: '150%',
		width: '100%',
		position: 'absolute',
		borderBottomStartRadius: 300,
		borderBottomEndRadius: 300,
		transform: [{ scaleX: 1.2 }],
	},
	pokemonImage: {
		width: 200,
		height: 200,
		marginBottom: 10,
	},
	nameText: {
		fontWeight: 'bold',
		color: 'white',
		fontSize: 24,
		textTransform: 'capitalize',
		textAlign: 'center',
	},
});

export default PokemonHeader;
