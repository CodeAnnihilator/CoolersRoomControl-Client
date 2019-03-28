import React from 'react';

import NotificationsTemplate from '../../common/components/NotificationsTemplate/NotificationsTemplate';

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
	dates: number[];
	notifications: INotification[][];
}

const Notifications: React.FC<IProps> = ({dates, notifications}) => (
	<NotificationsTemplate dates={dates} notifications={notifications} />
);

export default Notifications;
