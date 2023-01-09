import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import useAuth from '../../hooks/useAuth';
import { getItemsObject } from '../../libs/storage';

const ContentItem = ({ title, text }) => {
	return (
		<View style={styles.contentItemContainer}>
			<Text style={styles.contentItemTitle}>{title}</Text>
			<Text style={styles.contentItemText}>{text}</Text>
		</View>
	);
};

const UserPanel = () => {
	const [favoritesCount, setFavoritesCount] = useState(0);

	const { auth, logout } = useAuth();

	useFocusEffect(
		useCallback(() => {
			getFavoriteCount();
		}, [])
	);

	const getFavoriteCount = async () => {
		if (!auth.username) return;

		const result = (await getItemsObject('FAVORITE_POKEMONS')) || '[]';
		const favoritePokemons = JSON.parse(result);

		console.log(favoritePokemons.length);
		setFavoritesCount(favoritePokemons.length);
	};

	const { firstName, lastName, username, email } = auth;

	return (
		<>
			<View style={styles.header}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Bienvenido, </Text>
					<Text style={styles.firstName}>{`${firstName} ${lastName}`}</Text>
				</View>
			</View>

			<View style={styles.content}>
				<ContentItem title={'Nombre: '} text={firstName} />
				<ContentItem title={'Apellido: '} text={lastName} />
				<ContentItem title={'Usuario: '} text={username} />
				<ContentItem title={'Email: '} text={email} />
				<ContentItem title={'Favoritos: '} text={favoritesCount} />
			</View>

			<View style={styles.logoutButtonContainer}>
				<Pressable style={styles.logoutButton} onPress={logout}>
					<Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
				</Pressable>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	header: {
		alignItems: 'center',
	},
	titleContainer: {
		marginVertical: 25,
		flexDirection: 'row',
	},
	title: {
		fontSize: 24,
		fontWeight: '00',
	},
	firstName: {
		fontWeight: 'bold',
		fontSize: 24,
		color: 'orange',
		fontStyle: 'italic',
	},
	content: {
		paddingHorizontal: 20,
	},
	contentItemContainer: {
		flexDirection: 'row',
		paddingVertical: 10,
		borderBottomWidth: 2,
		borderBottomColor: '#dedede',
	},
	contentItemTitle: {
		fontSize: 16,
		fontWeight: '500',
		width: 95,
	},
	contentItemText: {
		fontSize: 16,
	},
	logoutButtonContainer: {
		alignItems: 'center',
	},
	logoutButton: {
		backgroundColor: 'orange',
		width: '80%',
		marginTop: 30,
		paddingVertical: 5,
		borderRadius: 10,
	},
	logoutButtonText: {
		textAlign: 'center',
		color: 'white',
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
});

export default UserPanel;
