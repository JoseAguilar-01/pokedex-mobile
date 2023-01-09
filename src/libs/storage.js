import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeItemsObject = async (key, value) => {
	try {
		const itemsObject = JSON.stringify(value);
		await AsyncStorage.setItem(key, itemsObject);

		return true;
	} catch (error) {
		console.log(error);

		return false;
	}
};

export const getItemsObject = async key => {
	try {
		const response = await AsyncStorage.getItem(key);
		const result = await JSON.parse(response);

		return result;
	} catch (error) {
		return new Error('Algo ha salido mal');
	}
};
