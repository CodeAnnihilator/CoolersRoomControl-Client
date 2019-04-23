import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import cn from 'react-native-classnames';

import Notification from './Notification/Notification';

import styles from './navElStyles';

interface IProps {
	title: string;
	ImageComponent: any;
	onPress?: () => void;
	isActive?: boolean;
	isNotification?: boolean;
}

const NavEl: React.FC<IProps> = ({
	title,
	ImageComponent,
	onPress,
	isActive,
	isNotification,
}) => (
	<View style={styles.container}>
		<TouchableOpacity onPress={onPress} style={styles.elWrapper}>
			<View style={styles.imageContainer}>
				{isNotification && <Notification />}
				<ImageComponent fill={isActive ? '#3d91e5' : ''} />
			</View>
			<Text style={cn(styles, 'text', {['text_active']: isActive})}>{title}</Text>
		</TouchableOpacity>
	</View>
);

export default NavEl;
