import { pokemonTypeColors } from '../constants';

export const getColorByPokemonType = typeOfPokemon => {
	return pokemonTypeColors[typeOfPokemon];
};
