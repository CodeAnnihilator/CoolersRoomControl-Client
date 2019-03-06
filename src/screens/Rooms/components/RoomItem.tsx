import React, {Component} from 'react'
import {SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, Image, Text} from 'react-native';

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
	}
});

export default class RoomItem extends Component {
	render() {
		return (
			<SafeAreaView style={styles.roomBoxContainer}>
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('RoomCard', {roomID: this.props.index})}
					style={styles.roomBoxContent}
				>
					<Text>Room {this.props.index}</Text>
					<Image
						style={styles.roomBox}
						source={{uri: `https://picsum.photos/${roomBoxSquareSide}/${roomBoxSquareSide}/?random`}}
					/>
				</TouchableOpacity>
			</SafeAreaView>
		)
	}
}
