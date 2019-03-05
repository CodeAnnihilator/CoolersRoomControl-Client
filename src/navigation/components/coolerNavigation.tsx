import CoolerCard from "../../screens/Coolers/components/CoolerCard";
import { createStackNavigator } from "react-navigation";
import Coolers from "../../screens/Coolers/components/Coolers";

export default createStackNavigator({
	CoolerCard: {
		screen: CoolerCard,
	},
	Coolers: {
		screen: Coolers,
	}
}, {
	initialRouteName: 'Coolers',
})
