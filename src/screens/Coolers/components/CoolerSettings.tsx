import React from 'react';
import {SafeAreaView, Alert} from 'react-native';

export default class CoolerSettings extends React.Component {
	render() {
		return (
			<SafeAreaView>
				{Alert.alert(
					'Coolers settings',
					`You select a ${this.props.selectedCoolerTitle}`,
					[
						{
							text: 'Remove cooler from room',
							onPress: () => console.log('Remove cooler')
						},
						{
							text: 'Cancel',
							onPress: () => console.log('Cancel Pressed'),
							style: 'cancel',
						},
					],
					{cancelable: true},
				)}
			</SafeAreaView>
		);
	}
}