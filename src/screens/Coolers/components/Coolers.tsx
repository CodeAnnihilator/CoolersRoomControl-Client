import React, { ReactText } from 'react';
import {View, Text, StyleSheet, GestureResponderEvent} from 'react-native';
import CoolerSettings from './CoolerSettings';
import CoolerItem from './CoolerItem';

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
	}
});

export default class Coolers extends React.Component<any, any> {
	state = {
		selectedCoolerTitle: null,
	}

	getCoolerSettings = (event: GestureResponderEvent, selectedCoolerTitle: string) => this.setState({selectedCoolerTitle})

	onPress = (event: GestureResponderEvent, id: ReactText) => this.props.navigation.navigate('CoolerCard', {id})

	render() {
		const {selectedCoolerTitle} = this.state;
		const {navigation} = this.props;
		const roomID = JSON.stringify(navigation.getParam('roomID'))

		return (
			<View style={styles.container}>
				{selectedCoolerTitle
					? (
						<CoolerSettings
							selectedCoolerTitle={selectedCoolerTitle}
						/>
					)
					: null}
				<Text>Coolers</Text>
				{roomID
					? <Text>Room ID is {roomID}</Text>
					: null
				}
				{mock.map(({id, title}) => (
					<CoolerItem
						key={id}
						id={id}
						title={title}
						onLongPress={this.getCoolerSettings}
						onPress={this.onPress}
					/>
				))}
			</View>
		)
	}
}
