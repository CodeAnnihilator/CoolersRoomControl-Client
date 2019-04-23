import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';

import {saveCoolers} from '../../../screens/Rooms/actions/roomsActions';

import styles from './saveButtonStyles';

const SaveButton = connect()(({dispatch, navigation}: any) => {
	const {coolers, roomID} = navigation.state.params;

	if (!coolers) return null;

	const onPress = () => {
		dispatch(saveCoolers(coolers, roomID));
		navigation.goBack();
	};

	return (
		<TouchableOpacity
			onPress={onPress}
			style={styles.button}
		>
			<Text style={styles.text}>SAVE</Text>
		</TouchableOpacity>
	);
});

export default SaveButton;
