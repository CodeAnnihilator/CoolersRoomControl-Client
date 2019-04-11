import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';

import styles from './coolerCardStyles';

interface IProps {
	cooler: {
		id: number;
		power: string;
		series: string;
		status: string;
		title: string;
		room: string;
		place: string;
		source: string;
		type: string;
		certification: string;
		cop: string;
	};
}

export default class CoolerCard extends Component<IProps> {
	public render() {
		const {cooler} = this.props;

		return (
			<ScrollView>
				<View style={styles.titleWrapper}>
					<Text style={styles.title}>{cooler.title}</Text>
					<Text style={styles.series}>{cooler.series}</Text>
					<Text style={styles.room}>Room: {cooler.room}</Text>
				</View>
				<View style={styles.optionsWrapper}>
					<Text style={styles.option}>Place of Origin</Text>
					<Text style={styles.description}>{cooler.place}</Text>
				</View>
				<View style={styles.optionsWrapper}>
					<Text style={styles.option}>Power Source</Text>
					<Text style={styles.description}>{cooler.source}</Text>
				</View>
				<View style={styles.optionsWrapper}>
					<Text style={styles.option}>Type</Text>
					<Text style={styles.description}>{cooler.type}</Text>
				</View>
				<View style={styles.optionsWrapper}>
					<Text style={styles.option}>Certification</Text>
					<Text style={styles.description}>{cooler.certification}</Text>
				</View>
				<View style={styles.optionsWrapper}>
					<Text style={styles.option}>COP</Text>
					<Text style={styles.description}>{cooler.cop}</Text>
				</View>
				<View style={styles.optionsWrapper}>
					<Text style={styles.option}>Power (W)</Text>
					<Text style={styles.description}>{cooler.power}</Text>
				</View>
			</ScrollView>
		);
	}
}
