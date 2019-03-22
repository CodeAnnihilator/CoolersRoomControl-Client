import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import Rooms from '../../screens/Rooms/components/Rooms';
import Scheduler from '../../screens/Scheduler/components/Scheduler';
import Statistics from '../../screens/Statistics/components/Statistics';
import RoomCardContainer from '../../screens/Rooms/containers/RoomCardContainer';

export default createStackNavigator({
	RoomCard: {
		screen: createBottomTabNavigator({
			Room: {
				screen: RoomCardContainer,
				navigationOptions: {
					title: 'Room',
				},
			},
			Scheduler: {
				screen: Scheduler,
			},
			Statistics: {
				screen: Statistics,
			},
		}, {
			initialRouteName: 'Room',
			swipeEnabled: true,
		}),
		navigationOptions: () => ({
			title: 'Main Office Room',
		})},
	Rooms: {
		screen: Rooms,
	},
}, {
	initialRouteName: 'Rooms',
});
