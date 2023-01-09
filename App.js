import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './src/context/AuthContext';
import NavigationTabs from './src/navigation/NavigationTabs';

const App = () => {
	return (
		<NavigationContainer>
			<AuthProvider>
				<NavigationTabs />
			</AuthProvider>
		</NavigationContainer>
	);
};

export default App;
