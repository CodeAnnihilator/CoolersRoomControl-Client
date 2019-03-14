import {Alert} from 'react-native';

const SettingsAlert = (closeAlert: () => void)  => Alert.alert(
	'Confirm new settings',
	'Are you sure?',
	[
		{
			text: 'Confirm',
			onPress: closeAlert,
		},
		{
			text: 'Cancel',
			onPress: closeAlert,
			style: 'cancel',
		},
	],
	{cancelable: false},
)

export default SettingsAlert;
