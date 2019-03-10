import React, {ReactText} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import CoolerItem from './CoolerItem';
import CoolerSettings from './CoolerSettings';

const mock = [{
	id: 1,
	title: 'Cooler 1',
}, {
	id: 2,
	title: 'Cooler 2',
}, {
	id: 3,
	title: 'Cooler 3',
}];

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default class Coolers extends React.Component<any, any> {
	public state = {
		selectedCoolerTitle: null,
	};

	private readonly getCoolerSettings = (selectedCoolerTitle: ReactText) =>
		this.setState({selectedCoolerTitle})

	protected onPress = (id: ReactText) =>
		this.props.navigation.navigate('CoolerCard', {id})

	public render() {

		const {selectedCoolerTitle} = this.state;
		const {navigation} = this.props;
		const roomID = JSON.stringify(navigation.getParam('roomID'));

		return (
			<View style={styles.container}>
				{
					selectedCoolerTitle && (
						<CoolerSettings selectedCoolerTitle={selectedCoolerTitle} />
					)
				}
				<Text>Coolers</Text>
				{
					roomID && (
						<Text>Room ID is {roomID}</Text>
					)
				}
				{
					mock.map(({id, title}) => (
						<CoolerItem
							key={id}
							id={id}
							title={title}
							onLongPress={this.getCoolerSettings}
							onPress={this.onPress}
						/>
					))
				}
			</View>
		);
	}
}
