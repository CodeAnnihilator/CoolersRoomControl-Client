import React from 'react';
import {Text, View, KeyboardAvoidingView, ScrollView} from 'react-native';
import {Field} from 'redux-form';

import styles from './styles/Settings.styles';

import ImagePicker from '../../common/components/ImagePickerWrapper';

import SettingsPasswordInputContainer from './containers/SettingsPasswordInputContainer';
import ReduxFormText from '../../common/components/reduxForm/reduxFormText';

const ImagePickerRenderer: React.FC<any> = ({input: {value, onChange}}) => (
	<ImagePicker uri={value} onChange={onChange} />);

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
						<Field name='image' component={ImagePickerRenderer} />
					</View>
					<View style={styles.userInfo}>
						<Text style={styles.userInfoTitle}>First Name:</Text>
						<Field name='firstname' component={ReduxFormText} />
					</View>
					<View style={styles.userInfo}>
						<Text style={styles.userInfoTitle}>Last Name:</Text>
						<Field name='lastname' component={ReduxFormText}/>
					</View>
					<View style={styles.userInfo}>
						<Text style={styles.userInfoTitle}>Age:</Text>
						<Field name='age' component={ReduxFormText}/>
					</View>
					<View style={styles.userInfo}>
						<Text style={styles.userInfoTitle}>Role:</Text>
						<Field name='role' component={ReduxFormText}/>
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
