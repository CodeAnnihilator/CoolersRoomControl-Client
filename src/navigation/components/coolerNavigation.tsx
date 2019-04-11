import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {TouchableOpacity} from 'react-native';

import Menu from '../../assets/images/Menu';

import CoolerCard from '../../screens/Coolers/containers/CoolerCardContainer';
import Coolers from '../../screens/Coolers/containers/CoolersContainers';

export default createStackNavigator({
	CoolerCard: {
		screen: CoolerCard,
		navigationOptions: {
			title: 'Cooler',
		},
	},
	Coolers: {
		screen: Coolers,
		navigationOptions: ({navigation}: any) => ({
			title: 'Rooms',
			headerLeft: () => (
				<TouchableOpacity onPress={navigation.openDrawer}>
					<Menu />
				</TouchableOpacity>
			),
			headerLeftContainerStyle: {paddingLeft: 20},
		}),
	},
}, {
	initialRouteName: 'Coolers',
});
