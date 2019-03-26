import {createStackNavigator} from 'react-navigation';

import Users from '../../screens/Users/Users';

export default createStackNavigator({
	Users: {
		screen: Users,
	},
}, {
	initialRouteName: 'Users',
});
