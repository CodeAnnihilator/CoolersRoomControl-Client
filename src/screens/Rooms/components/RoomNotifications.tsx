import React, {Component} from 'react';
import {NavigationComponent} from 'react-navigation';

import {INotification} from '../../../common/types/entitiesTypes';
import NotificationsTemplate from '../../../common/components/NotificationsTemplate/NotificationsTemplate';

interface IProps {
	dates: number[];
	notifications: INotification[][];
	navigation: NavigationComponent;
}

class Notifications extends Component<IProps> {
	protected editEvent = (notification: INotification) => {
		const {navigation} = this.props;
		const roomID = navigation.getParam('roomID');

		return navigation.navigate('RoomEditEvent', {notification, roomID});
	}

	public render() {
		const {dates, notifications} = this.props;

		return (
			<NotificationsTemplate
				dates={dates}
				notifications={notifications}
				editEvent={this.editEvent}
			/>
		);
	}

}

export default Notifications;
