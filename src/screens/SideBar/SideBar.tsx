import React, {PureComponent} from 'react';
import {NavigationActions} from 'react-navigation';
import {View} from 'react-native';

import HousePlanScaleImg from '../../assets/images/HousePlanScale';
import CarAirConditioningImg from '../../assets/images/CarAirConditioning';
import ScheduleImg from '../../assets/images/Schedule';
import PieChartImg from '../../assets/images/PieChart';
import LogoutImg from '../../assets/images/Logout';
import SettingsImg from '../../assets/images/Settings';
import UsersImg from '../../assets/images/Users';

import NavEl from './components/NavEl/NavEl';
import Avatar from './components/Avatar/Avatar';
import Devider from './components/Devider/Devider';

import styles from './sideBarStyles';

class SideBar extends PureComponent<any> {

	private readonly navigateToScreen = (route: any) => () => {
		const navigateAction = NavigationActions.navigate({routeName: route});
		this.props.navigation.dispatch(navigateAction);
	}

	public render() {
		const {index} = this.props.navigation.state;

		return (
			<View style={styles.container}>
				<Avatar />
				<Devider />
				<NavEl
					title='Rooms'
					onPress={this.navigateToScreen('Rooms')}
					ImageComponent={HousePlanScaleImg}
					isActive={index === 0}
				/>
				<NavEl
					title='Coolers'
					onPress={this.navigateToScreen('Coolers')}
					ImageComponent={CarAirConditioningImg}
					isActive={index === 1}
				/>
				<NavEl
					title='Schedule'
					onPress={this.navigateToScreen('Schedule')}
					ImageComponent={ScheduleImg}
					isActive={index === 2}
					isNotification={true}
				/>
				<NavEl
					title='Statistics'
					onPress={this.navigateToScreen('Statistics')}
					ImageComponent={PieChartImg}
					isActive={index === 3}
				/>
				<NavEl
					title='Users'
					onPress={this.navigateToScreen('Users')}
					ImageComponent={UsersImg}
					isActive={index === 4}
				/>
				<Devider />
				<NavEl
					title='Settings'
					onPress={this.navigateToScreen('Settings')}
					ImageComponent={SettingsImg}
					isActive={index === 5}
				/>
				<NavEl
					title='Sign out'
					onPress={this.navigateToScreen('Logout')}
					ImageComponent={LogoutImg}
				/>
			</View>
		);
	}
}

export default SideBar;
