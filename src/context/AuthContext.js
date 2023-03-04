import { createContext, useState } from 'react';

const AuthContext = createContext({
	auth: {},
	login: () => {},
	logout: () => {},
});

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({});

	const login = userData => {
		return setAuth(userData);
	};

	const logout = () => {
		return setAuth({});
	};

	return (
		<AuthContext.Provider value={{ login, logout, auth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
