import React from 'react';
import {KeyboardAvoidingView, Image, Text, View, Button} from 'react-native';
import AuthInput from './AuthInput';
import {Field} from 'redux-form';
import EStyleSheet from 'react-native-extended-stylesheet';
import pinWheelLogo from '../../../assets/pinwheel.png';
import validationRules from '../validation/validation';

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	img: {
		width: 48,
		height: 48,
	},
	font: {
		fontSize: 64,
	},
	titleBox: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	button: {
		width: 200,
		height: 40,
		marginTop: 20,
		borderRadius: 5,
	},
});

const Auth: React.FC<any> = ({navigation: {navigate}, valid}) => (
	<KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
		<View style={styles.titleBox}>
			<Text style={styles.font}>CL</Text>
			<Image
				style={styles.img}
				source={pinWheelLogo}
			/>
			<Text style={styles.font}>MAX</Text>
		</View>
		<Field
			name='username'
			component={AuthInput}
			header='Username:'
			validate={validationRules.required}
		/>
		<Field
			name='password'
			component={AuthInput}
			header='Password:'
			validate={validationRules.required}
		/>
		<Field
			name='email'
			component={AuthInput}
			header='Email:'
			validate={[validationRules.required]}
		/>
		<View style={styles.button}>
			<Button title='Login' onPress={() => navigate('App')} disabled={!valid}/>
		</View>
	</KeyboardAvoidingView>
);

export default Auth;
