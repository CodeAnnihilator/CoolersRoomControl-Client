import {createStackNavigator} from 'react-navigation';

import Statistics from '../../screens/Statistics/components/Statistics';

export default createStackNavigator({
	Statistics: {
		screen: Statistics,
	},
}, {
	initialRouteName: 'Statistics',
});
