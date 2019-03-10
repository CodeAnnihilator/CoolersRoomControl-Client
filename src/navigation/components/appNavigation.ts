import {createStackNavigator} from 'react-navigation';

import DrawerNavigation from './drawerNavigation';

export default createStackNavigator({
	Drawer: {
		screen: DrawerNavigation,
	},
}, {
	headerMode: 'none',
});
