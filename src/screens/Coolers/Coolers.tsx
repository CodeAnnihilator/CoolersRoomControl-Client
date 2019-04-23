import React, {ReactText, Component} from 'react';
import {ScrollView} from 'react-native';
import {NavigationComponent} from 'react-navigation';

import CoolerItem from './components/CoolerItem/CoolerItem';

import styles from './coolersStyles';

interface ICooler {
	id: number;
	power: string;
	title: string;
	series: string;
	status: string;
	room: string;
	place: string;
	source: string;
	type: string;
	certification: string;
	cop: string;
}

interface IProps {
	coolers: ICooler[];
	navigation: NavigationComponent;
}

export default class Coolers extends Component<IProps> {

	protected onPress = (id: ReactText) =>
		this.props.navigation.navigate('CoolerCard', {id})

	public render() {
		const {coolers} = this.props;

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
