import React, {ReactText, Component} from 'react';
import {ScrollView} from 'react-native';
import {NavigationScreenProps, NavigationComponent} from 'react-navigation';

import {ICooler} from '../../screens/Rooms/types/Cooler';

import CoolerItem from '../../common/components/CoolerItem/CoolerItem';

import styles from './coolersStyles';

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
