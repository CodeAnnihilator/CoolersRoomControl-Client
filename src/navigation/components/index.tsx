import {createStackNavigator} from 'react-navigation';
import AppNavigation from './appNavigation';
import AuthNavigation from './authNavigation';
import TestContainer from '../../screens/Test/TestContainer';

export default createStackNavigator({
	App: {
		screen: AppNavigation,
	},
	Auth: {
		screen: AuthNavigation,
	},
	Test: {
		screen: createStackNavigator({TestContainer}),
	},
}, {
	headerMode: 'none',
	initialRouteName: 'App',
});
