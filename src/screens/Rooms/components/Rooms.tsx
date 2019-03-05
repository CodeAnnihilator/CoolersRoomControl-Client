import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import RoomItemContainer from '../containers/RoomItemContainer';

const roomBoxSquareSide = Dimensions.get('window').width - 60;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	roomBox: {
		marginVertical: 10,
		width: roomBoxSquareSide,
		height: Dimensions.get('window').width - 40,
		backgroundColor: '#f0f0f0',
	}
});

export default class Rooms extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Rooms</Text>
				<ScrollView>
					{Array.from({length: 10}).map((_, index) => <RoomItemContainer key={index} index={index + 1} />)}
				</ScrollView>
			</View>
		)
	}
}
