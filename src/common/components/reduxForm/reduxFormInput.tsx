import React, {PureComponent} from 'react';
import {TextInput} from 'react-native';
import {WrappedFieldProps} from 'redux-form';

interface IReduxFormInput {
	placeholder?: string;
	style?: object | null;
}

export default class ReduxFormInput extends PureComponent<WrappedFieldProps & IReduxFormInput> {
	public static readonly defaultProps = {
		placeholder: 'Type something',
		style: null,
	};

	private readonly onInputChange = (value: string) => this.props.input.onChange(value);

	public render() {
		const {
			input: {value},
			style,
			placeholder,
		} = this.props;

		return (
			<TextInput
				style={style}
				onChangeText={this.onInputChange}
				value={value.toString()}
				placeholder={placeholder}
			/>
		);
	}
}
