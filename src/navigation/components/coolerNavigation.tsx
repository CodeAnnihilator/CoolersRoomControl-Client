import {createStackNavigator} from 'react-navigation';

import CoolerCard from '../../screens/Coolers/components/CoolerCard';
import Coolers from '../../screens/Coolers/components/Coolers';

export default createStackNavigator({
	CoolerCard: {
		screen: CoolerCard,
	},
	Coolers: {
		screen: Coolers,
	},
}, {
	initialRouteName: 'Coolers',
});
