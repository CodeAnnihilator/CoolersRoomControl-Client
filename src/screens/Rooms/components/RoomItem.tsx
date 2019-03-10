import React, {Component} from 'react';
import {Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

const roomBoxSquareSide = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
	roomBox: {
		width: roomBoxSquareSide,
		height: roomBoxSquareSide,
		backgroundColor: '#f0f0f0',
	},
	roomBoxContainer: {
		marginVertical: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	roomBoxContent: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default class RoomItem extends Component<any, any> {
	public render() {
		const {
			index,
			navigation,
		} = this.props;

		return (
			<SafeAreaView style={styles.roomBoxContainer}>
				<TouchableOpacity
					onPress={() => navigation.navigate('RoomCard', {roomID: index})}
					style={styles.roomBoxContent}
				>
					<Text>Room {index}</Text>
					<Image
						style={styles.roomBox}
						source={{uri: `https://picsum.photos/${roomBoxSquareSide}/${roomBoxSquareSide}/?random`}}
					/>
				</TouchableOpacity>
			</SafeAreaView>
		);
	}
}
