import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import cn from 'react-native-classnames';

import colors from '../../../common/constants/colors';

import {INotification} from '../../../common/types/entitiesTypes';

import generateName from 'sillyname';

import Thermometer from '../../../assets/images/Thermometer';
import Drop from '../../../assets/images/Drop';

import styles from './notificationCardStyles';

interface IProps {
	notification: INotification;
	editEvent: (notification: INotification) => void;
}

const randomName = generateName();
const URI = 'http://i.pravatar.cc/200';

class NotificationsCard extends Component<IProps> {
	protected editEvent = () => {
		const {editEvent, notification} = this.props;

		return editEvent(notification);
	}

	public	render() {
		const {
			notification: {
				timeFrom, timeTo, operation, temperature, humidity, weekly, description, roomID,
			},
		} = this.props;

		return (
			<TouchableOpacity
				style={styles.contentWrapper}
				onPress={this.editEvent}
			>
				<View style={styles.userInfo}>
					<Image style={styles.image} source={{uri: URI}} />
					<View style={styles.info}>
						<Text style={styles.time}>{timeFrom}{timeTo ? ` - ${timeTo}` : null }</Text>
						<Text style={styles.textWrapper}>
							<Text style={styles.textBold}>Manager: </Text>
							{randomName}
						</Text>
						<Text style={styles.textWrapper}>
							<Text style={styles.textBold}>Operation: </Text>
							<Text
								style={cn(styles, {
									['scheduled']: operation === 'Scheduled',
									['manually']: operation === 'Manually',
								})}
							>
								{operation}
							</Text>
						</Text>
						<Text style={styles.textWrapper}>
							<Text style={styles.textBold}>Room: </Text>
							{roomID}
						</Text>
					</View>
				</View>
				<View style={styles.indicatorWrapper}>
					<View style={styles.thermometer}>
						<Thermometer fill={colors['$black']} width={20} height={20} />
						<Text style={styles.textIndicator}>+{temperature} C</Text>
					</View>
					<View style={styles.drop}>
						<Drop fill={colors['$black']} width={20} height={20} />
						<Text style={styles.textIndicator}>{humidity} %</Text>
					</View>
					<View style={styles.bageWrapper}>
						{
							weekly === 'Repeat' ? (
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
			</TouchableOpacity>
		);
	}
}

export default NotificationsCard;
