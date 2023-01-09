import { useNavigation } from '@react-navigation/native';
import { capitalize } from 'lodash';
import {
	Text,
	Image,
	StyleSheet,
	View,
	TouchableWithoutFeedback,
} from 'react-native';

import { getColorByPokemonType } from '../../utils/functions/getColorByPokemonType';

const PokemonCard = ({ item }) => {
	const navigation = useNavigation();

	const handlePress = () => {
		navigation.navigate('PokemonView', item);
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				<Image source={{ uri: item.image }} style={styles.image} />
				<View
					style={[
						styles.containerTextElement,
						{ backgroundColor: getColorByPokemonType(item.type) },
					]}
				>
					<Text style={styles.textName}>{capitalize(item.name)}</Text>
					<Text style={styles.textId}>#{`${item.id}`.padStart(3, 0)}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		height: 130,
		paddingHorizontal: 10,
		marginBottom: 20,
	},
	image: {
		position: 'absolute',
		top: 35,
		left: 90,
		width: 90,
		height: 90,
		zIndex: 1,
	},
	containerTextElement: {
		borderRadius: 10,
		paddingHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		height: '100%',
	},
	textName: {
		fontWeight: 'bold',
		fontSize: 16,
		paddingVertical: 5,
		color: 'white',
	},
	textId: {
		fontSize: 16,
		paddingVertical: 5,
		color: 'white',
	},
});

export default PokemonCard;
