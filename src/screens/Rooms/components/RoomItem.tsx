import React, {Component} from 'react';
import {Image, Text, View, Button} from 'react-native';

import styles from '../styles/RoomItem.styles';

import {getTemperatureAtSystem} from '../../../utils/temperatureAtSystem';

import Thermometer from '../../../assets/images/Thermometer';
import Drop from '../../../assets/images/Drop';

export default class RoomItem extends Component<any> {
	private readonly goToRoom = () => {
		const {id, navigation} = this.props;

		navigation.navigate('RoomCard', {roomID: id});
	}

	public render() {
		const {
			room: {
				title,
				humidity,
				temperatureScale,
				temperature,
			},
		} = this.props;

		return (
			<View style={styles.roomBoxContainer}>
				<Image
					style={styles.roomImage}
					source={{uri: 'https://picsum.photos/400/400/?random'}}
				/>
				<View style={styles.roomBox}>
					<Text style={styles.roomBoxTitle}>{title}</Text>
					<View style={styles.roomBoxInfo}>
						<View style={styles.roomBoxParams}>
							<Thermometer width={14} height={14} />
							<Text style={styles.roomBoxParamsTitle}>
								+ {getTemperatureAtSystem(temperature, temperatureScale)}
							</Text>
						</View>
						<View style={styles.roomBoxParams}>
							<Drop width={14} height={14} />
							<Text style={styles.roomBoxParamsTitle}>
								{humidity} %
							</Text>
						</View>
					</View>
					<View style={styles.roomBoxRoomButton}>
						<Button
							onPress={this.goToRoom}
							title='enter room'
						/>
					</View>
				</View>
			</View>
		);
	}
}
