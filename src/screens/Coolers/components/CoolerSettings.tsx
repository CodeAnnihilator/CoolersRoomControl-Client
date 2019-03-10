import React from 'react';
import {Alert, SafeAreaView} from 'react-native';

const CoolerSettings = (selectedCoolerTitle: any) => (
	<SafeAreaView>
		{(Alert.alert as any)(
			'Coolers settings',
			`You select a ${selectedCoolerTitle}`,
			[
				{
					text: 'Remove cooler from room',
					onPress: () => console.log('Remove cooler'),
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

export default CoolerSettings;
