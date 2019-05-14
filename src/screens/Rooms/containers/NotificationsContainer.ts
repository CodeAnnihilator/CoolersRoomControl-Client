import {connect} from 'react-redux';

import Notifications from '../components/Notifications/Notifications';
import {sortByUniqueDate, getElsByDay} from '../selectors/roomsSelectors';

const mapStateToProps = (state: any, {navigation}: any) => {
	const roomID = navigation.getParam('roomID', null);

	return {
		notifications: getElsByDay(state, roomID),
		dates: sortByUniqueDate(state, roomID),
	};
};

export default connect(mapStateToProps)(Notifications);
