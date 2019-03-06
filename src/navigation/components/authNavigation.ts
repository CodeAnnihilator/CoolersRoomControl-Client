import {createStackNavigator} from 'react-navigation';
import Auth from '../../screens/Auth/components/Auth';

export default createStackNavigator({
	Auth,
}, {
	headerMode: 'none',
})