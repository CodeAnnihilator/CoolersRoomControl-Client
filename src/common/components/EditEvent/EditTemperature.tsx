import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {WrappedFieldProps} from 'redux-form';

import ControlArrow from '../../../assets/images/ControlArrow';

import styles from './editEventStyles';

interface IReduxFormInput {
	indicators?: string;
}

class RoomEditTemperature extends Component<WrappedFieldProps & IReduxFormInput> {
	public static readonly defaultProps = {
		indicators: null,
	};

	public incrementIndicatorAtRoom = () => {
		const {
			input: {value, onChange},
		} = this.props;

		onChange(value - 1);
	}

	public decrementIndicatorAtRoom = () => {
		const {
			input: {value, onChange},
		} = this.props;

		onChange(Number(value) + 1);
	}

	public render() {
		const {
			input: {value},
			indicators,
		} = this.props;

		return (
			<View style={styles.indicator}>
				<TouchableOpacity
					onPress={this.incrementIndicatorAtRoom}
					style={styles.controlButton}
				>
					<ControlArrow direction='left' />
				</TouchableOpacity>
				<View style={styles.wrapper}>
					<Text style={styles.temperatureStyle}>
						{indicators === 'C' && '+'}{value} {indicators}
					</Text>
				</View>
				<TouchableOpacity
					onPress={this.decrementIndicatorAtRoom}
					style={styles.controlButton}
				>
					<ControlArrow direction='right'	/>
				</TouchableOpacity>
			</View>
		);
	}
}

export default RoomEditTemperature;
