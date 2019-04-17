import React, {PureComponent, ReactText} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import Power from '../../../assets/images/Power';
import ControlArrow from '../../../assets/images/ControlArrow';

import colors from '../../../common/constants/colors';
import styles from './coolerItemStyles';

interface ICoolerItemProps {
	cooler: {
		id: number;
		power: string;
		title: string;
		series: string;
		status: string;
		roomID: number | null;
	};
	onPress: (id: ReactText) => void;
}

export default class CoolerItem extends PureComponent<ICoolerItemProps> {
	protected onPress = () => {
		const {cooler, onPress} = this.props;

		return onPress(cooler.id);
	}

	public render() {
		const {
			cooler: {
				power, title, series, status, roomID,
			},
		} = this.props;

		const statusColor = (status === 'active' ?
			colors['$green600'] : status === 'off' ?
			colors['$gray400'] : colors['$red600']
		);

		return (
			<TouchableOpacity
				style={styles.container}
				onPress={this.onPress}
			>
				<View>
					<View style={styles.powerWrapper}>
						<Power fill={colors['$black']} width={24} height={24} />
						<Text>
							{`${power} kW`}
						</Text>
					</View>
					<View style={styles.titleWrapper}>
						<Text style={styles.title}>{title}</Text>
						<View style={[styles.bage, {backgroundColor: statusColor}]} />
					</View>
					<Text style={styles.series}>{series}</Text>
					<Text style={styles.title}>
						<Text>Room: </Text>
						{roomID !== null ? roomID : 'No Room'}
					</Text>
				</View>
				<View>
					<ControlArrow width={15} height={15} fill={colors['$gray400']} direction='right'	/>
				</View>
			</TouchableOpacity>
		);
	}
}
