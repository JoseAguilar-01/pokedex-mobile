import { StyleSheet, View } from 'react-native';

import LoginForm from '../../components/LoginForm';
import UserPanel from '../../components/UserPanel';
import useAuth from '../../hooks/useAuth';

const AccountView = () => {
	const { auth } = useAuth();

	return (
		<View style={styles.container}>
			{auth.username ? <UserPanel /> : <LoginForm />}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default AccountView;
