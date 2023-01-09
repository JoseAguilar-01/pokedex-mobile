import { capitalize } from 'lodash';
import { View, Text, StyleSheet } from 'react-native';

import { getColorByPokemonType } from '../../utils/functions/getColorByPokemonType';

const PokemonType = ({ types }) => {
	return (
		<View style={styles.container}>
			{types &&
				types.map(type => (
					<View
						key={type.type.name}
						style={[
							styles.containerTypeText,
							{
								backgroundColor: getColorByPokemonType(type.type.name),
							},
						]}
					>
						<Text style={styles.typeText}>{capitalize(type.type.name)}</Text>
					</View>
				))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
		paddingHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	containerTypeText: {
		height: 30,
		borderRadius: 15,
		paddingVertical: 3,
		paddingHorizontal: 20,
		marginHorizontal: 10,
	},
	typeText: {
		fontWeight: '500',
		color: 'white',
	},
});

export default PokemonType;
