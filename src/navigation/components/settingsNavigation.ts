import {createStackNavigator} from 'react-navigation';

import SettingsResetPasswordContainer from '../../screens/Settings/containers/SettingsResetPasswordContainer';
import SettingsContainer from '../../screens/Settings/containers/SettingsContainer';

export default createStackNavigator({
	Settings: {
		screen: SettingsContainer,
	},
	SettingsResetPassword: {
		screen: SettingsResetPasswordContainer,
	},
}, {
	initialRouteName: 'Settings',
});
