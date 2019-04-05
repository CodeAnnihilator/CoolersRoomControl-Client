import React, {PureComponent} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';

import styles from '../styles/RoomEditRoom.styles';

interface IRoomEditRoomImageProps {
	image: string;
	navigation: any;
	chooseItemAtGallery: (roomID: string, image: string) => void;
}

export default class RoomEditRoomImage extends PureComponent<IRoomEditRoomImageProps> {

	private readonly goToImagesGallery = () => {
		const {navigation, chooseItemAtGallery, image} = this.props;
		const roomID = navigation.getParam('roomID');

		chooseItemAtGallery(roomID, image);

		navigation.navigate('editRoomImagesGallery', {
			roomID: navigation.getParam('roomID'),
		});
	}

	public render() {
		const {image} = this.props;

		return (
			<TouchableOpacity onPress={this.goToImagesGallery}>
				<View style={styles.imagesGalleryImage}>
					<Image
						style={{width: 100, height: 100}}
						source={{uri: image}}
					/>
				</View>
			</TouchableOpacity>
		);
	}
}
