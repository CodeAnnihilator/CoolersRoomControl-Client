import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/RoomEditRoomTempImage';

import Remove from '../../../assets/images/Remove';

const RoomEditRoomTempImage: React.FC<any> = ({item, onPress}) => {
	const onRemovePress = () => onPress('temporaryImages',
		(fieldValue: any) => fieldValue.filter((elem: any) => elem.id !== item.id),
	);

	return (
		<View
			style={styles.container}
		>
			<Image
				source={{uri: item.image}}
				style={styles.imageContainer}
			/>
			<View>
				<Text style={styles.title}>
					IMAGE_TITLE_HERE
				</Text>
				<Text>
					1.123 mb
				</Text>
			</View>
			<TouchableOpacity onPress={onRemovePress}>
				<Remove />
			</TouchableOpacity>
		</View>
	);
};

export default RoomEditRoomTempImage;
