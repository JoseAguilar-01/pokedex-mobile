import { useFormik } from 'formik';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import * as Yup from 'yup';

import useAuth from '../../hooks/useAuth';
import { user, userDetails } from '../../utils/userDB';

const LoginForm = () => {
	const [loginError, setLoginError] = useState('');

	const { login } = useAuth();

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		validationSchema: Yup.object({
			username: Yup.string().required('El usuario es obligatorio'),
			password: Yup.string().required('La contraseña es obligatoria'),
		}),
		onSubmit: values => {
			setLoginError('');

			const { username, password } = values;

			if (username !== user.username || password !== user.password) {
				setLoginError('El email o el usuario es incorrecto');

				setTimeout(() => {
					setLoginError('');
				}, 4000);

				return;
			}

			return login(userDetails);
		},
	});

	const { handleSubmit, setFieldValue, values, touched, errors } = formik;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Iniciar Sesión</Text>
			<TextInput
				style={styles.input}
				placeholder='Username'
				autoCapitalize='none'
				onChangeText={text => setFieldValue('username', text)}
				value={values.username}
			/>

			{touched.username && errors.username && (
				<View style={styles.containerErrorText}>
					<Text style={styles.errorText}>{errors.username}</Text>
				</View>
			)}

			<TextInput
				style={styles.input}
				placeholder='Password'
				autoCapitalize='none'
				secureTextEntry={true}
				onChangeText={text => setFieldValue('password', text)}
				value={values.password}
			/>

			{touched.password && errors.password && (
				<View style={styles.containerErrorText}>
					<Text style={styles.errorText}>{errors.password}</Text>
				</View>
			)}

			<Pressable style={styles.buttonSubmit} onPress={handleSubmit}>
				<Text style={styles.textButtonSubmit}>Enviar Datos</Text>
			</Pressable>

			{loginError && (
				<View style={styles.containerErrorText}>
					<Text style={styles.loginErrorText}>{loginError}</Text>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		textAlign: 'center',
	},
	input: {
		borderColor: '#000',
		borderWidth: 1,
		width: '80%',
		height: 40,
		marginTop: 15,
		paddingHorizontal: 15,
		borderRadius: 10,
	},
	containerErrorText: {
		marginTop: 12,
		paddingVertical: 3,
		borderRadius: 10,
		width: '80%',
		backgroundColor: '#FCB8C6',
		justifyContent: 'center',
		alignItems: 'center',
	},
	errorText: {
		color: 'red',
		fontWeight: '500',
		fontSize: 13,
	},
	buttonSubmit: {
		marginTop: 20,
		backgroundColor: 'orange',
		width: '55%',
		paddingVertical: 5,
		borderRadius: 10,
	},
	textButtonSubmit: {
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold',
	},
	loginErrorText: {
		color: 'red',
		fontWeight: '500',
	},
});

export default LoginForm;
