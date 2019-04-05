import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Field} from 'redux-form';

import styles from '../styles/RoomEditRoom.styles';

import ImagePicker from '../../../common/components/ImagePickerWrapper';
import ReduxFormInput from '../../../common/components/reduxForm/reduxFormInput';
import RoomEditRoomImageContainer from '../containers/RoomEditRoomImageContainer';

interface IRoomsProps {
	room: {
		images: string[];
	};
}

export default class RoomEditRoom extends React.Component<IRoomsProps> {
	public render() {
		const {room: {images}} = this.props;

		return (
			<ScrollView>
				<View>
					<View style={styles.editRoomItem}>
						<Text style={styles.editRoomItemTitle}>Title</Text>
						<Field name='title' component={ReduxFormInput} style={styles.editRoomItemContent}/>
					</View>
					<View style={styles.editRoomItem}>
						<Text style={styles.editRoomItemTitle}>Description</Text>
						<Field name='description' component={ReduxFormInput} style={styles.editRoomItemContent}/>
					</View>
					<View style={styles.editRoomItem}>
						<Text style={styles.editRoomItemTitle}>Square</Text>
						<Field name='square' component={ReduxFormInput} style={styles.editRoomItemContent}/>
					</View>
					<View style={styles.editRoomItem}>
						<Text style={styles.editRoomItemTitle}>Ceil Height</Text>
						<Field name='height' component={ReduxFormInput} style={styles.editRoomItemContent}/>
					</View>
				</View>
				<View style={styles.addImageContainer}>
					<View>
						<Field
							name='uri'
							component={({input: {value, onChange}}: any) => (
								<ImagePicker uri={value} onChange={onChange} />
							)}
							style={styles.editRoomItemContent}
						/>
					</View>
					<Text style={styles.addImageContainerTitle}>Add Image</Text>
				</View>
				<ScrollView
					contentContainerStyle={styles.imagesGallery}
					horizontal
				>
					{images.map((item: string, index: number) => (
						<RoomEditRoomImageContainer
							image={item}
							key={index}
						/>
					))}
				</ScrollView>
			</ScrollView>
		);
	}
}
