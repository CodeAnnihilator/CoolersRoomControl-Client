import React from 'react';
import {Text, KeyboardAvoidingView, TextInput} from 'react-native';

import styles from '../styles/Settings.styles';

export default class SettingsPasswordInput extends React.PureComponent<any> {
	public state = {
		isAlertVisible: false,
	};

	private readonly onInputChange = (value: string) => this.props.input.onChange({value});

	public render() {
		const {
			input: {value},
			title,
		} = this.props;

		return (
			<KeyboardAvoidingView
				style={styles.userInfo}
				behavior='padding'
				enabled
			>
				<Text style={styles.userInfoTitle}>{title}</Text>
				<TextInput
					onChangeText={this.onInputChange}
					style={styles.userPwdInput}
					textContentType='password'
					value={value.value}
					secureTextEntry
				/>
			</KeyboardAvoidingView>
		);
	}
}
