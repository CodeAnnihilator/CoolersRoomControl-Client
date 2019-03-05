import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import Coolers from "../../screens/Coolers/components/Coolers";
import Scheduler from "../../screens/Scheduler/components/Scheduler";
import Statistics from "../../screens/Statistics/components/Statistics";
import Rooms from "../../screens/Rooms/components/Rooms";

export default createStackNavigator({
	RoomCard: createBottomTabNavigator({
		CoolersInRoom: {
			screen: Coolers,
		},
		Scheduler: {
			screen: Scheduler
		},
		Statistics: {
			screen: Statistics
		},
	}, {
		initialRouteName: 'CoolersInRoom'
	}),
	Rooms: {
		screen: Rooms,
	}
}, {
	initialRouteName: 'Rooms',
})
