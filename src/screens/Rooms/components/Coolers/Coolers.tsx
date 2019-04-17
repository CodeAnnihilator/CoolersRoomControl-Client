import React, {ReactText, Component} from 'react';
import {NavigationComponent} from 'react-navigation';
import {ScrollView, Text} from 'react-native';

import {ICooler} from '../../types/Cooler';

import CoolerItem from '../../../../common/components/CoolerItem/CoolerItem';

interface IProps {
	coolers: ICooler[];
	navigation: NavigationComponent;
}

class Coolers extends Component<IProps> {

	protected onPress = (id: ReactText) =>
		this.props.navigation.navigate('CoolerCardByRoom', {id})

	public render() {
		const {coolers} = this.props;

		return (
			<ScrollView>
				{
					coolers.length ?
						coolers.map((cooler: ICooler) => (
							<CoolerItem
								key={cooler.id}
								cooler={cooler}
								onPress={this.onPress}
							/>
						)) :
						<Text>No coolers</Text>
				}
			</ScrollView>
		);
	}
}

export default Coolers;
