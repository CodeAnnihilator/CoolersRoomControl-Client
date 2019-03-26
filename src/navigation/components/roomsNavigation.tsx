import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import Scheduler from '../../screens/Scheduler/components/Scheduler';
import Statistics from '../../screens/Statistics/components/Statistics';
import RoomCardContainer from '../../screens/Rooms/containers/RoomCardContainer';
import Menu from '../../assets/images/Menu';
import KebabMenu from '../../assets/images/KebabMenu';
import RoomsContainer from '../../screens/Rooms/containers/RoomsContainer';

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
		screen: RoomsContainer,
		navigationOptions: ({navigation}: any) => ({
			title: 'Rooms',
			headerLeft: () => (
				<TouchableOpacity onPress={navigation.openDrawer}>
					<Menu />
				</TouchableOpacity>
			),
			headerRight: (
				<TouchableOpacity onPress={() => console.log('kebab menu')}>
					<KebabMenu width={18} height={18} />
				</TouchableOpacity>
			),
			headerLeftContainerStyle: {paddingLeft: 20},
			headerRightContainerStyle: {paddingRight: 20},
		}),
	},
}, {
	initialRouteName: 'Rooms',
});
