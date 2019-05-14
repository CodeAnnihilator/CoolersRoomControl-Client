import {connect} from 'react-redux';

import Notifications from '../../Notifications/Notifications';
import {getNotificationsFilteredByDay, getFilteredDatesForNotifications} from '../selectors/schedulerSelectors';

const mapStateToProps = (state: any) => ({
	notifications: getNotificationsFilteredByDay(state),
	dates: getFilteredDatesForNotifications(state),
});

export default connect(mapStateToProps)(Notifications);
