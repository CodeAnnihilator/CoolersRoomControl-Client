import React, {Component, ReactNode} from 'react';
import {View, Text, TextInput} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {WrappedFieldProps} from 'redux-form';

const styles = EStyleSheet.create({
	container: {
		marginTop: 5,
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderRadius: 5,
		borderWidth: 1,
		width: 200,
		paddingHorizontal: 5,
	},
	header: {
		fontSize: 12,
		fontWeight: '500',
	},
});

interface IProps {
	header: ReactNode | string;
}

export default class AuthInput extends Component<WrappedFieldProps & IProps> {

	private readonly onInputChange = (value: string) => this.props.input.onChange({value});

	public render() {
		const {
			input: {value, name},
			header,
		} = this.props;

		return (
			<View style={styles.container}>
				<Text style={styles.header}>{header}</Text>
				<TextInput
					style={styles.input}
					onChangeText={this.onInputChange}
					value={value.value}
					placeholder={`Type your ${name} here`}
				/>
			</View>
		);
	}
}
