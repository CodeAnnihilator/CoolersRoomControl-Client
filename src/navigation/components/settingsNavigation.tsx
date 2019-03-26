import React from 'react';

import {createStackNavigator} from 'react-navigation';

import SettingsContainer from '../../screens/Settings/containers/SettingsContainer';

import Menu from '../../assets/images/Menu';
import {TouchableOpacity, Button} from 'react-native';

export default createStackNavigator({
	Settings: {
		screen: SettingsContainer,
		navigationOptions: ({navigation}: any) => ({
			title: 'SETTINGS',
			headerLeft: () => (
				<TouchableOpacity onPress={navigation.openDrawer}>
					<Menu />
				</TouchableOpacity>
			),
			headerRight: (
				<Button
					title='Save'
					onPress={() => console.log('save user info')}
				/>), // add a send to backend here later
			headerLeftContainerStyle: {paddingLeft: 20},
			headerRightContainerStyle: {paddingRight: 20},
		}),
	},
}, {
	initialRouteName: 'Settings',
});
