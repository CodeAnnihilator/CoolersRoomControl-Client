import React, {ReactText, PureComponent} from 'react';
import {ScrollView} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';

import CoolerItem from './components/CoolerItem/CoolerItem';

import {coolers} from '../../common/seed/entities';

import styles from './coolersStyles';

interface ICooler {
	id: number;
	power: string;
	title: string;
	series: string;
	status: string;
}

export default class Coolers extends PureComponent<NavigationScreenProps> {

	protected onPress = (id: ReactText) =>
		this.props.navigation.navigate('CoolerCard', {id})

	public render() {
		return (
			<ScrollView style={styles.container}>
				{
					coolers.map((cooler: ICooler) => (
						<CoolerItem
							key={cooler.id}
							cooler={cooler}
							onPress={this.onPress}
						/>
					))
				}
			</ScrollView>
		);
	}
}
