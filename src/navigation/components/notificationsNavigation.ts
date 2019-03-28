import {createStackNavigator} from 'react-navigation';

import Notifications from '../../screens/Notifications/containers/NotificationsContainer';

export default createStackNavigator({
	Notifications: {
		screen: Notifications,
	},
}, {
	initialRouteName: 'Notifications',
});
