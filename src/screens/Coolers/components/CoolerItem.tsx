import React, {Component, ReactText} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from '../styles/CoolerItem.styles';

interface ICoolerItemProps {
	title: ReactText;
	id: ReactText;
	onLongPress: (title: ReactText) => void;
	onPress: (id: ReactText) => void;
}

export default class CoolerItem extends Component<ICoolerItemProps> {
	public render() {
		const {
			title,
			id,
			onLongPress,
			onPress,
		} = this.props;

		return (
			<TouchableOpacity
				onLongPress={() => onLongPress(title)}
				onPress={() => onPress(id)}
			>
				<View style={styles.container}>
					<Text>
						{title}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}
}
