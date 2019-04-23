import React from 'react';
import {View} from 'react-native';

import styles from './notificationStyles';

const Notification: React.FC = () => (
	<View style={styles.notification_outer}>
		<View style={styles.notification_inner} />
	</View>
);

export default Notification;
