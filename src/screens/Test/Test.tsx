import * as React from 'react';
import {Text, View} from 'react-native';

interface IProps {
	value: number;
	incrementValue: () => void;
}

export default class Test extends React.PureComponent<IProps> {
	public render() {
		const {
			value,
			incrementValue,
		} = this.props;

		return (
			<View style={{marginTop: 50}}>
				<Text>Hello Expo!</Text>
				<Text onPress={incrementValue}>PRESS</Text>
				<Text>{value}</Text>
			</View>
		);
	}
}
