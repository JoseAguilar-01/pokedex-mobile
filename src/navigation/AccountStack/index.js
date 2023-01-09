import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountView from '../../views/AccountView';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
	return (
		<Stack.Navigator detachInactiveScreens={false}>
			<Stack.Screen
				name='AccountView'
				component={AccountView}
				options={{
					title: 'Cuenta',
				}}
			/>
		</Stack.Navigator>
	);
};

export default AccountStack;
