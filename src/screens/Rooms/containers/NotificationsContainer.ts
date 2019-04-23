import {connect} from 'react-redux';
import {NavigationComponent} from 'react-navigation';

import Notifications from '../components/Notifications/Notifications';
import {sortByUniqueDate, getElsByDay} from '../selectors/roomsSelectors';

const mapStateToProps = (state: any, {navigation}: NavigationComponent) => {
	const roomID = navigation.getParam('roomID');

	return {
		notifications: getElsByDay(state, roomID),
		dates: sortByUniqueDate(state, roomID),
	};
};

export default connect(mapStateToProps)(Notifications);
