import {createStackNavigator} from 'react-navigation';

import SchedulerContainer from '../../screens/Scheduler/containers/SchedulerContainer';

export default createStackNavigator({
	Scheduler: {
		screen: SchedulerContainer,
		navigationOptions: {
			title: 'Schedule',
		},
	},
}, {
	initialRouteName: 'Scheduler',
});
