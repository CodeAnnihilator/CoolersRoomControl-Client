import React, {Component, ReactText} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ICoolerItemProps {
	title: ReactText;
	id: ReactText;
	onLongPress: (title: ReactText) => void;
	onPress: (id: ReactText) => void;
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: '#F0F0F0',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 10,
	},
});

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
