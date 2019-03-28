import React from 'react';
import {submit} from 'redux-form';
import {connect, DispatchProp} from 'react-redux';
import {TouchableOpacity, Button} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import Menu from '../../assets/images/Menu';
import Arrow from '../../assets/images/Arrow';
import KebabMenu from '../../assets/images/KebabMenu';
import Scheduler from '../../screens/Scheduler/components/Scheduler';
import Statistics from '../../screens/Statistics/components/Statistics';
import RoomsContainer from '../../screens/Rooms/containers/RoomsContainer';
import RoomCardContainer from '../../screens/Rooms/containers/RoomCardContainer';
import RoomEditRoomContainer from '../../screens/Rooms/containers/RoomEditRoomContainer';
import RoomEditImageGalleryContainer from '../../screens/Rooms/containers/RoomEditImageGalleryContainer';

const SubmitEditForm = connect()(({dispatch}: DispatchProp) => (
	<Button
		onPress={() => dispatch(submit('editRoom'))}
		title='Save'
	/>
));
import Notifications from '../../screens/Rooms/containers/NotificationsContainer';

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
			Notification: {
				screen: Notifications,
			},
		}, {
			initialRouteName: 'Room',
			swipeEnabled: true,
		}),
		navigationOptions: ({navigation}: any) => ({
			title: 'Main Office Room',
			headerRight: (
				<TouchableOpacity onPress={() => navigation.navigate('EditRoomCard', {roomID: navigation.getParam('roomID')})}>
					<KebabMenu width={18} height={18} />
				</TouchableOpacity>
			),
			headerRightContainerStyle: {paddingRight: 20},
		})},
	EditRoomCard: {
		screen: RoomEditRoomContainer,
		navigationOptions: () => ({
			title: 'Edit Room',
			headerBackTitle: 'Back',
			headerRight: <SubmitEditForm />,
			headerRightContainerStyle: {paddingRight: 20},
		}),
	},
	editRoomImagesGallery: {
		screen: RoomEditImageGalleryContainer,
		navigationOptions: ({navigation}: any) => ({
			title: null,
			headerLeft: () => (
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Arrow width={24} height={24} direction='left'/>
				</TouchableOpacity>
			),
			headerRight: (
				<TouchableOpacity onPress={() => console.log('sub menu')}>
					<KebabMenu width={18} height={18} />
				</TouchableOpacity>
			),
			headerRightContainerStyle: {paddingRight: 20, paddingTop: 10},
			headerLeftContainerStyle: {paddingLeft: 30, paddingTop: 10},
			headerTransparent: true,
		}),
	},
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
