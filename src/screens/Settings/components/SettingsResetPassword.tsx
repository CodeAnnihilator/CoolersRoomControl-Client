import React from 'react';
import {Text, View, TextInput, KeyboardAvoidingView, Button} from 'react-native';
import styles from '../styles/SettingsResetPassword.styles';

export default class SettingsResetPassword extends React.PureComponent<any> {
	public render() {
		//TODO: add a redux-form here with validation
		return (
			<KeyboardAvoidingView
				style={styles.container}
				behavior='padding'
				enabled
			>
				<View style={styles.passwordBox}>
					<Text>Old password:</Text>
					<TextInput style={styles.passwordInput}/>
				</View>
				<View style={styles.passwordBox}>
					<Text>New password:</Text>
					<TextInput style={styles.passwordInput}/>
				</View>
				<View style={styles.passwordBox}>
					<Text>Confirm password:</Text>
					<TextInput style={styles.passwordInput}/>
				</View>
				<View style={styles.changePwdButton}>
					<Button title='change password' onPress={() => console.log('saved')}/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}
