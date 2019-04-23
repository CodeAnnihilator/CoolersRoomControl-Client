import React, {Component} from 'react';
import {NavigationComponent} from 'react-navigation';
import {View, Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {getTemperatureAtSystem} from '../../../utils/temperatureAtSystem';

import Thermometer from '../../../assets/images/Thermometer';
import Drop from '../../../assets/images/Drop';
import Arrow from '../../../assets/images/Arrow';
import Fan from '../../../assets/images/Fan';
import Power from '../../../assets/images/Power';
import RoomBox from '../../../assets/images/RoomBox';
import ControlArrow from '../../../assets/images/ControlArrow';

const styles = EStyleSheet.create({
	verticalAlignHelper: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	headerItem: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 20,
		borderWidth: 1,
		borderColor: '$gray200',
	},
	headerItemBox: {
		marginHorizontal: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerItemTitle: {
		marginLeft: 5,
	},
	temperatureBox: {
		padding: 20,
		borderWidth: 1,
		borderColor: '$gray200',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	temperatureStyle: {
		fontSize: 20,
	},
	controlButton: {
		width: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

interface IProps {
	navigation: NavigationComponent;
	changeTemperatureAtRoom: (roomID: string, type: string) => void;
	changeHumidityAtRoom: (roomID: string, type: string) => void;
	tempScale: string;
	powerSumAtRoom: number;
	item: any;
}

export default class RoomCardComponent extends Component<IProps> {

private readonly incrementTemperatureAtRoom = () => {
	const {navigation, changeTemperatureAtRoom} = this.props;

	changeTemperatureAtRoom(navigation.getParam('roomID'), 'inc');
}

private readonly decrementTemperatureAtRoom = () => {
	const {navigation, changeTemperatureAtRoom} = this.props;

	changeTemperatureAtRoom(navigation.getParam('roomID'), 'dec');
}

private readonly incrementHumidityAtRoom = () => {
	const {navigation, changeHumidityAtRoom} = this.props;

	changeHumidityAtRoom(navigation.getParam('roomID'), 'inc');
}

private readonly decrementHumidityAtRoom = () => {
	const {navigation, changeHumidityAtRoom} = this.props;

	changeHumidityAtRoom(navigation.getParam('roomID'), 'dec');
}

public render() {
		const {item, tempScale, powerSumAtRoom} = this.props;

		return (
			<View style={styles.header}>
				<View style={styles.headerItem}>
					<View style={styles.headerItemBox}>
						<Thermometer fill='#EF7E7B' width={24} height={24} />
						<Text style={styles.headerItemTitle}>{`+${item.temperature}`}</Text>
						<Arrow fill='#EF7E7B' width={12} height={12} direction='up' />
					</View>
					<View style={styles.headerItemBox}>
						<Drop fill='#5A75F6' width={24} height={24} />
						<Text style={styles.headerItemTitle}>{`${item.humidity}%`}</Text>
						<Arrow fill='#5A75F6' width={12} height={12} direction='down' />
					</View>
				</View>
				<View style={styles.headerItem}>
					<View style={styles.headerItemBox}>
						<RoomBox fill='#000' width={24} height={24} />
						<Text style={styles.headerItemTitle}>{`${Number(item.square * item.height).toFixed(1)}m`}</Text>
						<Text style={{marginBottom: 10}}>3</Text>
					</View>
					<View style={styles.headerItemBox}>
						<Fan fill='#000' width={24} height={24} />
						<Text style={styles.headerItemTitle}>{item.coolers.length}</Text>
					</View>
					<View style={styles.headerItemBox}>
						<Power fill='#000' width={24} height={24} />
						<Text style={styles.headerItemTitle}>{powerSumAtRoom}</Text>
					</View>
				</View>
				<View style={styles.temperatureBox}>
					<View style={styles.verticalAlignHelper}>
						<Thermometer fill='#EF7E7B' width={24} height={24} />
						<Text>Temperature: </Text>
					</View>
					<View style={styles.verticalAlignHelper}>
						<TouchableOpacity
							onPress={this.decrementTemperatureAtRoom}
							style={styles.controlButton}
						>
							<ControlArrow direction='left' />
						</TouchableOpacity>
						<Text style={styles.temperatureStyle}>
							{getTemperatureAtSystem(item.temperature, tempScale)}
							{' '}
							{tempScale === 'celsius'
								? <Text>&#8451;</Text>
								: <Text>&#8457;</Text>
							}
						</Text>
						<TouchableOpacity
							onPress={this.incrementTemperatureAtRoom}
							style={styles.controlButton}
						>
							<ControlArrow direction='right'	/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.temperatureBox}>
					<View style={styles.verticalAlignHelper}>
						<Drop fill='#5A75F6' width={24} height={24} />
						<Text>Humidity: </Text>
					</View>
					<View style={styles.verticalAlignHelper}>
						<TouchableOpacity
							onPress={this.decrementHumidityAtRoom}
							style={styles.controlButton}
						>
							<ControlArrow direction='left' />
						</TouchableOpacity>
						<Text style={styles.temperatureStyle}>
							{`${item.humidity} %`}
						</Text>
						<TouchableOpacity
							onPress={this.incrementHumidityAtRoom}
							style={styles.controlButton}
						>
							<ControlArrow direction='right'	/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}
