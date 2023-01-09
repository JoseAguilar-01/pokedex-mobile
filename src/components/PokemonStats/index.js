import { capitalize } from 'lodash';
import { View, Text, StyleSheet } from 'react-native';

const PokemonStats = ({ stats }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Stats</Text>
			{stats &&
				stats.map(stat => (
					<View key={stat.stat.url} style={styles.containerStat}>
						<Text style={styles.statName}>{capitalize(stat.stat.name)}</Text>
						<View style={styles.containerBarStat}>
							<Text>{stat.base_stat}</Text>
							<View style={styles.baseBarStat}>
								<View
									style={[
										styles.barStat,
										{
											backgroundColor:
												stat.base_stat < 50 ? '#ff3e3e' : '#03C206',
											width:
												stat.base_stat <= 100 ? `${stat.base_stat}%` : '100%',
										},
									]}
								/>
							</View>
						</View>
					</View>
				))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		marginTop: 25,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 22,
		marginBottom: 5,
	},
	containerStat: {
		paddingVertical: 5,
		flexDirection: 'row',
		alignItems: 'center',
	},
	statName: {
		width: '42%',
		fontWeight: '500',
		fontSize: 16,
	},
	containerBarStat: {
		width: '58%',
	},
	baseBarStat: {
		backgroundColor: '#dedede',
		height: 5,
		borderRadius: 10,
	},
	barStat: {
		height: 5,
		borderRadius: 10,
	},
});

export default PokemonStats;
