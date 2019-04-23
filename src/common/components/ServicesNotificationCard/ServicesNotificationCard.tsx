import React from 'react';
import {View, Text} from 'react-native';

import colors from '../../constants/colors';

import FanImage from '../../../assets/images/Fan';

import styles from './servicesNotificationCardStyles';

interface IProps {
	notification: {
		id: number;
		type: string;
		date: string;
		time: string;
		operation?: string;
		temperature?: string;
		humidity?: string;
		weekly?: boolean;
		description?: string;
		message?: string;
		model?: string;
		serial?: string;
		roomId: number;
	};
}

const ServicesNotificationCard: React.FC<IProps> = ({notification}) => {
	const {time, message, model, serial, roomId} = notification;

	return(
			<View style={styles.contentWrapper}>
				<View style={styles.servicesInfo}>
					<View style={styles.imageWrapper}>
						<FanImage fill={colors['$black']} width={28} height={28} />
					</View>
					<View style={styles.infoWrapper}>
						<Text style={styles.time}>{time}</Text>
						<Text style={styles.textWrapper}>
							<Text style={styles.textBold}>Message: </Text>
							{message}
						</Text>
						<Text style={styles.textWrapper}>
							<Text style={styles.textBold}>Room: </Text>
							{roomId}
						</Text>
						<Text style={styles.textWrapper}>
							<Text style={styles.textBold}>Model: </Text>
							{model}
						</Text>
						<Text style={styles.textWrapper}>
							<Text style={styles.textBold}>Serial: </Text>
							{serial}
						</Text>
					</View>
				</View>
			</View>
	);
};

export default ServicesNotificationCard;
