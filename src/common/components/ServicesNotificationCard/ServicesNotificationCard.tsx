import React from 'react';
import {View, Text} from 'react-native';

import colors from '../../constants/colors';

import FanImage from '../../../assets/images/Fan';

import {INotification} from '../../../common/types/entitiesTypes';

import styles from './servicesNotificationCardStyles';

interface IProps {
	notification: INotification;
}

const ServicesNotificationCard: React.FC<IProps> = ({notification}) => {
	const {timeFrom, timeTo, message, model, serial, roomID} = notification;

	return(
			<View style={styles.contentWrapper}>
				<View style={styles.servicesInfo}>
					<View style={styles.imageWrapper}>
						<FanImage fill={colors['$black']} width={28} height={28} />
					</View>
					<View style={styles.infoWrapper}>
						<Text style={styles.time}>{timeFrom}{timeTo ? ` - ${timeTo}` : null }</Text>
						<Text style={styles.textWrapper}>
							<Text style={styles.textBold}>Message: </Text>
							{message}
						</Text>
						<Text style={styles.textWrapper}>
							<Text style={styles.textBold}>Room: </Text>
							{roomID}
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
