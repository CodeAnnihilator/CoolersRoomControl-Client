import React from 'react';
import {Text, View, KeyboardAvoidingView, ScrollView, Button} from 'react-native';

import styles from './styles/Settings.styles';

import SettingsSwitchItemContainer from './containers/SettingsSwitchItemContainer';
import SettingsAlert from './components/SettingsAlert';

export default class Settings extends React.PureComponent<any> {
	public types = ['fahrenheit', 'celsius'];

	public state = {
		isAlertVisible: false,
	};

	private readonly showAlert = () => this.setState({isAlertVisible: true});

	private readonly hideAlert = () => this.setState({isAlertVisible: false});

	private readonly moveToSettingsResetPassword = () => this.props.navigation.navigate('SettingsResetPassword');

	public render() {

		return (
			<KeyboardAvoidingView
				style={styles.container}
				behavior='padding'
				enabled
			>
				{this.state.isAlertVisible
					? SettingsAlert(this.hideAlert)
					: null}
				<ScrollView>
					<View style={styles.user}>
						<Text style={styles.settingsTitle}>Settings</Text>
					</View>
					<View style={styles.settingsBox}>
						<Text style={styles.settingsBoxHeader}>Temperature scale:</Text>
						{this.types.map((type: string, index: number) => (
							<SettingsSwitchItemContainer
								key={type}
								type={type}
								index={index}
								switchesArrayLength={this.types.length}
							/>
						))}
					</View>
					<View style={styles.passwordBox}>
						<Text style={styles.settingsBoxHeader}>Password settings:</Text>
						<Button
							onPress={this.moveToSettingsResetPassword}
							title='password settings'
						/>
					</View>
					<View style={styles.saveSettings}>
						<Button
							onPress={this.showAlert}
							title='save settings'
						/>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		);
	}
}
