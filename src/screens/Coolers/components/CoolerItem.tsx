import React, { ReactText } from 'react';
import {View, Text, TouchableOpacity, GestureResponderEvent, StyleSheet} from 'react-native';

interface CoolerItemProps {
	title: ReactText,
	onLongPress: (event: GestureResponderEvent) => void,
	onPress: (event: GestureResponderEvent) => void,
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: '#F0F0F0',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 10,
	}
});

const CoolerItem: React.FC<CoolerItemProps> = ({title, id, onLongPress, onPress}) => {
	const setCoolerTitle = (event: GestureResponderEvent) => onLongPress(event, title);

	const onCoolerPress = (event: GestureResponderEvent) => onPress(event, id);

	return (
		<TouchableOpacity
			onLongPress={setCoolerTitle}
			onPress={onCoolerPress}
		>
			<View style={styles.container}>
				<Text>
					{title}
				</Text>
			</View>
		</TouchableOpacity>
	)
}

export default CoolerItem;
