import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';
import dayjs from 'dayjs';

import NotificationCard from '../NotificationCard/NotificationCard';
import ServicesNotificationCard from '../ServicesNotificationCard/ServicesNotificationCard';

import {INotification} from '../../../common/types/entitiesTypes';

import styles from './notificationsTemplateStyles';

interface IProps {
	notifications: INotification[][];
	dates: number[];
	editEvent: any;
}

class Notifications extends Component<IProps> {
	public renderContent = (notification: INotification) => {
		switch (notification.type) {
			case 'notification': {
				return <NotificationCard notification={notification} key={notification.id} editEvent={this.props.editEvent} />;
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
				{dates.map((el: number, index: number) => (
						<View key={el} style={styles.cardWrapper}>
							<View style={styles.border}>
								<Text style={styles.date}>{dayjs(el).format('DD MMM')}</Text>
							</View>
							<View style={styles.content}>
								{notifications[index].map(this.renderContent)}
							</View>
						</View>
					))
				}
			</ScrollView>
		);
	}
}

export default Notifications;
