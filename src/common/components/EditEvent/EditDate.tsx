import React, {PureComponent} from 'react';
import {TextInput} from 'react-native';
import {WrappedFieldProps} from 'redux-form';
import dayjs from 'dayjs';

interface IReduxFormInput {
	placeholder?: string;
	style?: object | null;
}

export default class RoomEditDate extends PureComponent<WrappedFieldProps & IReduxFormInput> {
	public static readonly defaultProps = {
		placeholder: 'Type something',
		style: null,
	};

	private readonly onInputChange = (value: string) => this.props.input.onChange(new Date(value));

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
				value={value ? dayjs(value).format('MMM DD, YYYY') : ''}
				placeholder={placeholder}
			/>
		);
	}
}
