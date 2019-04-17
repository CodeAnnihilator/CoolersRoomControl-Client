import {createDrawerNavigator} from 'react-navigation';

import coolersNavigation from './coolersNavigation';
import RoomsNavigation from './roomsNavigation';
import schedulerNavigation from './schedulerNavigation';
import statisticsNavigation from './statisticsNavigation';
import SettingsNavigation from './settingsNavigation';
import usersNavigation from './usersNavigation';
import Notifications from './notificationsNavigation';

import SideBar from '../../screens/SideBar/SideBar';

export default createDrawerNavigator({
	Rooms: {
		screen: RoomsNavigation,
		navigationOptions: {
			title: 'Rooms',
		},
	},
	Coolers: {
		screen: coolersNavigation,
		navigationOptions: {
			title: 'Coolers',
		},
	},
	Scheduler: {
		screen: schedulerNavigation,
		navigationOptions: {
			title: 'Scheduler',
		},
	},
	Statistics: {
		screen: statisticsNavigation,
		navigationOptions: {
			title: 'Statistics',
		},
	},
	Users: {
		screen: usersNavigation,
		navigationOptions: {
			title: 'Users',
		},
	},
	Notifications: {
		screen: Notifications,
		navigationOptions: {
			title: 'Notifications',
		},
	},
	Settings: {
		screen: SettingsNavigation,
		navigationOptions: {
			title: 'Settings',
		},
	},
}, {
	initialRouteName: 'Rooms',
	contentComponent: SideBar,
});
