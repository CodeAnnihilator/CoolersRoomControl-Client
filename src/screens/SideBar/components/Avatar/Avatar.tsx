import React, {ReactNode} from 'react';
import {Text, View, Image} from 'react-native';

import generateName from 'sillyname';
import generateRandomEmail from 'random-email';

const randomName = generateName();
const randomEmail = generateRandomEmail();

import styles from './avatarStyles';

interface IProps {
	title?: string;
	ImageComponent?: ReactNode;
	onPress?: () => void;
}

const Avatar: React.FC<Partial<IProps>> = ({
	title,
	ImageComponent,
	onPress,
	...props
}) => (
	<View style={styles.container} {...props}>
		<Image style={styles.image} source={{uri: 'http://i.pravatar.cc/200'}} />
		<Text style={{fontWeight: 'bold'}}>{randomName}</Text>
		<Text style={{marginTop: 5}}>{randomEmail}</Text>
	</View>
);

export default Avatar;
