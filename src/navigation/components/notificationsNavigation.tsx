import React from 'react';
import {createStackNavigator, NavigationComponent} from 'react-navigation';
import {submit} from 'redux-form';
import {connect, DispatchProp} from 'react-redux';
import {Button, TouchableOpacity} from 'react-native';

import Menu from '../../assets/images/Menu';
import Plus from '../../assets/images/Plus';

import Notifications from '../../screens/Notifications/containers/NotificationsContainer';
import EditEvent from '../../screens/Notifications/containers/EditEventContainer';
import CreateEvent from '../../screens/Notifications/containers/CreateEventContainer';

const SubmitEditEventForm = connect()(({dispatch}: DispatchProp) => (
	<Button
		onPress={() => dispatch(submit('EditEvent'))}
		title='Save'
	/>
));

const SubmitCreateEventForm = connect()(({dispatch}: DispatchProp) => (
	<Button
		onPress={() => dispatch(submit('CreateEvent'))}
		title='Save'
	/>
));

export default createStackNavigator({
	Notifications: {
		screen: Notifications,
		navigationOptions: ({navigation}: NavigationComponent) => ({
			title: 'Notifications',
			headerLeft: (
				<TouchableOpacity onPress={navigation.openDrawer}>
					<Menu />
				</TouchableOpacity>
			),
			headerRight: (
				<TouchableOpacity onPress={() => navigation.navigate('CreateEvent')}>
					<Plus width={32} height={32} />
				</TouchableOpacity>
			),
			headerLeftContainerStyle: {paddingLeft: 20},
			headerRightContainerStyle: {paddingRight: 20},
		}),
	},
	EditEvent: {
		screen: EditEvent,
		navigationOptions: () => ({
			title: 'Edit Event',
			headerRight: <SubmitEditEventForm />,
			headerRightContainerStyle: {paddingRight: 20},
		}),
	},
	CreateEvent: {
		screen: CreateEvent,
		navigationOptions: () => ({
			title: 'Create Event',
			headerRight: <SubmitCreateEventForm />,
			headerRightContainerStyle: {paddingRight: 20},
		}),
	},
}, {
	initialRouteName: 'Notifications',
});
