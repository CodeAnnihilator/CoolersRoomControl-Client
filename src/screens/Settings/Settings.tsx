import React from 'react';
import {Text, View, KeyboardAvoidingView, ScrollView} from 'react-native';
import {Field} from 'redux-form';

import styles from './styles/Settings.styles';

import AvatarUpload from '../../common/components/AvatarUpload';

import SettingsPasswordInputContainer from './containers/SettingsPasswordInputContainer';

const UserInfoRenderer: React.FC<any> = props => <Text>{props.input.value}</Text>;

const AvatarUploadRenderer: React.FC<any> = ({input: {value, onChange}}) => (
	<AvatarUpload uri={value} onChange={onChange} />);

export default class Settings extends React.PureComponent<any> {
	public render() {

		return (
			<KeyboardAvoidingView
				behavior='padding'
				enabled
			>
				<ScrollView>
					<View style={styles.user}>
						<Text style={styles.userBoxTitle}>USER SETTINGS</Text>
					</View>
					<View style={styles.userAvatarBox}>
						<Field name='image' component={AvatarUploadRenderer} />

					</View>
					<View style={styles.userInfo}>
						<Text style={styles.userInfoTitle}>First Name:</Text>
						<Field name='firstname' component={UserInfoRenderer} />
					</View>
					<View style={styles.userInfo}>
						<Text style={styles.userInfoTitle}>Last Name:</Text>
						<Field name='lastname' component={UserInfoRenderer}/>
					</View>
					<View style={styles.userInfo}>
						<Text style={styles.userInfoTitle}>Age:</Text>
						<Field name='age' component={UserInfoRenderer}/>
					</View>
					<View style={styles.userInfo}>
						<Text style={styles.userInfoTitle}>Role:</Text>
						<Field name='role' component={UserInfoRenderer}/>
					</View>
					<View style={styles.user}>
						<Text style={styles.userBoxTitle}>APP SETTINGS</Text>
					</View>
					<View style={styles.userInfo}>
						<Text style={styles.userInfoTitle}>Temperature scale:</Text>
						<Text style={styles.userInfoAttribute}>Celsius</Text>
					</View>
					<View style={styles.user}>
						<Text style={styles.userBoxTitle}>PASSWORD SETTINGS</Text>
					</View>
					<Field
						component={SettingsPasswordInputContainer}
						title='Old Password'
						name='oldPassword'
					/>
					<Field
						component={SettingsPasswordInputContainer}
						title='New Password'
						name='newPassword'
					/>
					<Field
						component={SettingsPasswordInputContainer}
						title='Confirm Password'
						name='confirmPassword'
					/>
				</ScrollView>
			</KeyboardAvoidingView>
		);
	}
}
