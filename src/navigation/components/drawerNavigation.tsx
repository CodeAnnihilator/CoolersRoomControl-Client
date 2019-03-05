import {createDrawerNavigator} from 'react-navigation';
import RoomsNavigation from './roomsNavigation';
import coolerNavigation from './coolerNavigation';
import schedulerNavigation from './schedulerNavigation';
import statisticsNavigation from './statisticsNavigation';

export default createDrawerNavigator({
	Rooms: {
		screen: RoomsNavigation,
		navigationOptions: {
			title: 'Rooms',
		}
	},
	Coolers: {
		screen: coolerNavigation,
		navigationOptions: {
			title: 'Coolers',
		}
	},
	Scheduler: {
		screen: schedulerNavigation,
		navigationOptions: {
			title: 'Scheduler',
		}
	},
	Statistics: {
		screen: statisticsNavigation,
		navigationOptions: {
			title: 'Statistics',
		}
	},
}, {
	initialRouteName: 'Rooms'
})