import React, {PureComponent, ReactText} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import Power from '../../../../assets/images/Power';

import colors from '../../../../common/constants/colors';
import styles from './coolerItemStyles';

interface ICoolerItemProps {
	cooler: {
		id: number;
		power: string;
		title: string;
		series: string;
		status: string;
	};
	onPress: (id: ReactText) => void;
}

export default class CoolerItem extends PureComponent<ICoolerItemProps> {
	public render() {
		const {cooler, onPress} = this.props;
		const {id, power, title, series, status} = cooler;

		const statusColor = (status === 'active' ?
			colors['$green600'] : status === 'off' ?
			colors['$gray400'] : colors['$red600']
		);

		return (
			<TouchableOpacity
				style={styles.container}
				onPress={() => onPress(id)}
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
				</View>
				<View>
					<Text style={styles.arrow}>&#707;</Text>
				</View>
			</TouchableOpacity>
		);
	}
}
