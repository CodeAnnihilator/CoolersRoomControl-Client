import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';
import dayjs from 'dayjs';

import NotificationCard from '../NotificationCard/NotificationCard';
import ServicesNotificationCard from '../ServicesNotificationCard/ServicesNotificationCard';

import styles from './notificationsTemplateStyles';

interface INotification {
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
}

interface IProps {
	notifications: any;
	dates: number[];
}

class Notifications extends Component<IProps> {
	public renderContent = (notification: INotification) => {
		switch (notification.type) {
			case 'notification': {
				return <NotificationCard notification={notification} key={notification.id} />;
			}
			case 'servicesNotification': {
				return <ServicesNotificationCard notification={notification} key={notification.id} />;
			}
		}
	}

	public render() {
		const {notifications, dates} = this.props;

		return (
			<ScrollView style={styles.container}>
				{dates.length
					? dates.map((el: number, index: number) => (
						<View key={el} style={styles.cardWrapper}>
							<View style={styles.border}>
								<Text style={styles.date}>{dayjs(el).format('DD MMM')}</Text>
							</View>
							<View style={styles.content}>
								{notifications.length && notifications[index].map(this.renderContent)}
							</View>
						</View>
					))
					: (
						<View style={styles.notFound}>
							<Text style={styles.notFoundText}>
								Notifications not found
							</Text>
						</View>
					)
				}
			</ScrollView>
		);
	}
}

export default Notifications;
