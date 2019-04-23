import React from 'react';
import {Text, View, Switch} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import SettingsSwitchItemInterface from '../types/SettingsSwitchItem';

const styles = EStyleSheet.create({
	'switch': {
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '$gray300',
		marginHorizontal: 20,
		padding: 20,
		width: 250,
	},
	'switch:last-child': {
		borderBottomWidth: 0,
	},
});

export default class SettingsSwitchItem extends React.PureComponent<SettingsSwitchItemInterface> {
	private readonly onValueChange = () => {
		const {changeTemperatureScale, type} = this.props;

		changeTemperatureScale(type);
	}

	public render() {
		const {type, index, switchesArrayLength, temperatureScale} = this.props;
		const style = EStyleSheet.child(styles, 'switch', index, switchesArrayLength);

		return (
			<View
				style={style}
			>
				<Text>{`${type.charAt(0).toUpperCase()}${type.slice(1)}`}</Text>
				<Switch
					value={temperatureScale === type}
					onValueChange={this.onValueChange}
				/>
			</View>
		);
	}
}
