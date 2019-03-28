import React from 'react';
import {View, Text, Image} from 'react-native';

import generateName from 'sillyname';

import Thermometer from '../../../assets/images/Thermometer';
import Drop from '../../../assets/images/Drop';

import styles from './notificationCardStyles';

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

const randomName = generateName();
const URI = 'http://i.pravatar.cc/200';

const NotificationsCard: React.FC<IProps> = ({notification}) => {
	const {time, operation, temperature, humidity, weekly, description, roomId} = notification;

	return(
			<View style={styles.contentWrapper}>
				<View style={styles.userInfo}>
					<Image style={styles.image} source={{uri: URI}} />
					<View style={styles.info}>
						<Text style={styles.time}>{time}</Text>
						<Text style={styles.textWrapper}>
							<Text style={styles.textBold}>Manager: </Text>
							{randomName}
						</Text>
						<Text style={styles.textWrapper}>
							<Text style={styles.textBold}>Operation: </Text>
							<Text style={{color: operation === 'Scheduled' ? '#1ca36e' : '#2582e2'}}>{operation}</Text>
						</Text>
						<Text style={styles.textWrapper}>
							<Text style={styles.textBold}>Room: </Text>
							{roomId}
						</Text>
					</View>
				</View>
				<View style={styles.indicatorWrapper}>
					<View style={styles.thermometer}>
						<Thermometer fill='#000' width={20} height={20} />
						<Text style={styles.textIndicator}>{temperature}</Text>
					</View>
					<View style={styles.drop}>
						<Drop fill='#000' width={20} height={20} />
						<Text style={styles.textIndicator}>{humidity}</Text>
					</View>
					<View style={styles.bageWrapper}>
						{
							weekly ? (
								<View style={styles.bageWeekly}>
									<Text style={styles.bageText}>WEEKLY</Text>
								</View>
							) : null
						}
					</View>
				</View>
				{
					description ? (
						<View style={styles.descriptionWrapper}>
							<Text style={styles.textWrapper}>
								<Text style={styles.textBold}>Description: </Text>
								{description}
							</Text>
						</View>
					) : null
				}
			</View>
	);
};

export default NotificationsCard;
