import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';

import {ICooler} from '../../../screens/Rooms/types/Cooler';

import styles from './coolerCardStyles';

interface IProps {
	cooler: ICooler;
}

export default class CoolerCard extends Component<IProps> {
	public render() {
		const {
			cooler: {
				title, series, roomID, place, source, type, certification, cop, power,
			},
		} = this.props;
		const coolerOptions = [
			{
				title: 'Place of Origin',
				description: place,
			},
			{
				title: 'Power Source',
				description: source,
			},
			{
				title: 'Type',
				description: type,
			},
			{
				title: 'Certification',
				description: certification,
			},
			{
				title: 'COP',
				description: cop,
			},
			{
				title: 'Power (W)',
				description: power,
			},
		];

		return (
			<ScrollView>
				<View style={styles.titleWrapper}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.series}>{series}</Text>
					<Text style={styles.room}>Room: {roomID !== null ? roomID : 'No Room'}</Text>
				</View>
				{
					coolerOptions.map(option => (
						<View style={styles.optionsWrapper} key={option.title}>
							<Text style={styles.option}>{option.title}</Text>
							<Text style={styles.description}>{option.description}</Text>
						</View>
				))}
			</ScrollView>
		);
	}
}
