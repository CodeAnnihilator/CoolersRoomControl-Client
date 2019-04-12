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
import Notifications from '../../screens/Rooms/containers/NotificationsContainer';
import RoomsKebabContainer from '../../screens/Rooms/components/RoomsKebabContainer';
import RoomAddCardContainer from '../../screens/Rooms/containers/RoomAddCardContainer';
import RoomEditRoomContainer from '../../screens/Rooms/containers/RoomEditRoomContainer';
import RoomsEditCardKebabContainer from '../../screens/Rooms/containers/RoomsEditCardKebabContainer';
import RoomEditImageGalleryContainer from '../../screens/Rooms/containers/RoomEditImageGalleryContainer';
import RoomEditImageGalleryKebabContainer from '../../screens/Rooms/containers/RoomEditImageGalleryKebabContainer';

const SubmitEditForm = connect()(({dispatch}: DispatchProp) => (
	<Button
		onPress={() => dispatch(submit('editRoom'))}
		title='Save'
	/>
));

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
				<RoomsEditCardKebabContainer navigation={navigation}>
					<KebabMenu width={18} height={18} />
				</RoomsEditCardKebabContainer>
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
	AddRoomCard: {
		screen: RoomAddCardContainer,
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
				<RoomEditImageGalleryKebabContainer navigation={navigation}>
					<KebabMenu width={18} height={18} />
				</RoomEditImageGalleryKebabContainer>
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
				<RoomsKebabContainer navigation={navigation}>
					<KebabMenu width={18} height={18} />
				</RoomsKebabContainer>
			),
			headerLeftContainerStyle: {paddingLeft: 20},
			headerRightContainerStyle: {paddingRight: 20},
		}),
	},
}, {
	initialRouteName: 'Rooms',
});
