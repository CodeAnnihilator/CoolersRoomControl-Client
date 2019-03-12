import {createStackNavigator} from 'react-navigation';

import AuthContainer from '../../screens/Auth/containers/AuthContainer';

export default createStackNavigator({
	Auth: {
		screen: AuthContainer,
	},
}, {
	headerMode: 'none',
});
