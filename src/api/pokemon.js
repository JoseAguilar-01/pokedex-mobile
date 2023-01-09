import { API_HOST } from '@env';
import axios from 'axios';

export const getPokemons = async (prev, next) => {
	const url = prev || next || `${API_HOST}/pokemon?limit=16&offset=0`;

	try {
		const { data } = await axios.get(url);

		return {
			next: data.next,
			prev: data.previous,
			pokemonsList: data.results,
		};
	} catch (error) {
		console.log(error);
	}
};

export const getPokemonDetails = async url => {
	try {
		const { data } = await axios.get(url);

		return data;
	} catch (error) {
		console.log(error);
	}
};
