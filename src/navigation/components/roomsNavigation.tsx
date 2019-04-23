import React from 'react';
import {submit} from 'redux-form';
import {connect, DispatchProp} from 'react-redux';
import {TouchableOpacity, Button} from 'react-native';
import {createBottomTabNavigator, createStackNavigator, NavigationComponent} from 'react-navigation';

import Menu from '../../assets/images/Menu';
import Arrow from '../../assets/images/Arrow';
import KebabMenu from '../../assets/images/KebabMenu';

import HeaderRightNavigator from './HeaderRightNavigation';

import SaveButton from '../../common/components/SaveButton/SaveButton';

import Scheduler from '../../screens/Scheduler/components/Scheduler';
import Statistics from '../../screens/Statistics/components/Statistics';
import RoomsContainer from '../../screens/Rooms/containers/RoomsContainer';
import RoomCardContainer from '../../screens/Rooms/containers/RoomCardContainer';
import Notifications from '../../screens/Rooms/containers/NotificationsContainer';
import RoomsKebabContainer from '../../screens/Rooms/components/RoomsKebabContainer';
import RoomAddCardContainer from '../../screens/Rooms/containers/RoomAddCardContainer';
import RoomEditRoomContainer from '../../screens/Rooms/containers/RoomEditRoomContainer';
import RoomEditImageGalleryContainer from '../../screens/Rooms/containers/RoomEditImageGalleryContainer';
import RoomEditImageGalleryKebabContainer from '../../screens/Rooms/containers/RoomEditImageGalleryKebabContainer';
import CoolersContainer from '../../screens/Rooms/containers/CoolersContainer';
import CoolerCardContainer from '../../screens/Rooms/containers/CoolerCardContainer';
import BindingCoolerContainer from '../../screens/Rooms/containers/BindingCoolerContainer';
import RoomEditEventContainer from '../../screens/Rooms/containers/RoomEditEventContainer';
import RoomCreateEventContainer from '../../screens/Rooms/containers/RoomCreateEventContainer';

const SubmitEditForm = connect()(({dispatch}: DispatchProp) => (
	<Button
		onPress={() => dispatch(submit('editRoom'))}
		title='Save'
	/>
));

const SubmitEditEventForm = connect()(({dispatch}: DispatchProp) => (
	<Button
		onPress={() => dispatch(submit('RoomEditEvent'))}
		title='Save'
	/>
));

const SubmitCreateEventForm = connect()(({dispatch}: DispatchProp) => (
	<Button
		onPress={() => dispatch(submit('RoomCreateEvent'))}
		title='Save'
	/>
));

//tslint:disable-next-line
const noop = () => {};

export default createStackNavigator({
	CoolerCardByRoom: {
		screen: CoolerCardContainer,
	},
	BindingCooler: {
		screen: BindingCoolerContainer,
		navigationOptions: ({navigation}: any) => ({
			headerRight: (<SaveButton navigation={navigation} />),
			headerRightContainerStyle: {paddingRight: 20},
		}),
	},
	RoomCard: {
		screen: createBottomTabNavigator({
			Room: {
				screen: RoomCardContainer,
				navigationOptions: {
					title: 'Room',
				},
			},
			CoolersAtRoom: {
				screen: CoolersContainer,
				navigationOptions: {
					title: 'Coolers',
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
		navigationOptions: ({navigation}: NavigationComponent) => ({
			title: navigation.getParam('selectedRoomTitle'),
			headerRight: <HeaderRightNavigator navigation={navigation} />,
			headerRightContainerStyle: {paddingRight: 20},
		})},
	RoomEditEvent: {
		screen: RoomEditEventContainer,
		navigationOptions: () => ({
			title: 'Edit Event',
			headerRight: <SubmitEditEventForm />,
			headerRightContainerStyle: {paddingRight: 20},
		}),
	},
	RoomCreateEvent: {
		screen: RoomCreateEventContainer,
		navigationOptions: () => ({
			title: 'Create Event',
			headerRight: <SubmitCreateEventForm />,
			headerRightContainerStyle: {paddingRight: 20},
		}),
	},
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
		navigationOptions: ({navigation}: NavigationComponent) => ({
			title: null,
			headerLeft: () => (
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Arrow width={24} height={24} direction='left'/>
				</TouchableOpacity>
			),
			headerRight: (
				<RoomEditImageGalleryKebabContainer onHidden={noop}>
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
		navigationOptions: ({navigation}: NavigationComponent) => ({
			title: 'Rooms',
			headerLeft: () => (
				<TouchableOpacity onPress={navigation.openDrawer}>
					<Menu />
				</TouchableOpacity>
			),
			headerRight: navigation.state.params ? (
				<RoomsKebabContainer navigation={navigation}>
					<KebabMenu width={18} height={18} />
				</RoomsKebabContainer>
			) : null,
			headerLeftContainerStyle: {paddingLeft: 20},
			headerRightContainerStyle: {paddingRight: 20},
		}),
	},
}, {
	initialRouteName: 'Rooms',
});
