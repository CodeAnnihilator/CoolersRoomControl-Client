import {createDrawerNavigator} from 'react-navigation';

import coolerNavigation from './coolerNavigation';
import RoomsNavigation from './roomsNavigation';
import schedulerNavigation from './schedulerNavigation';
import statisticsNavigation from './statisticsNavigation';
import SettingsNavigation from './settingsNavigation';

import SideBar from '../../screens/SideBar/SideBar';

export default createDrawerNavigator({
	Rooms: {
		screen: RoomsNavigation,
		navigationOptions: {
			title: 'Rooms',
		},
	},
	Coolers: {
		screen: coolerNavigation,
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
