import {connect} from 'react-redux';

import Notifications from '../Notifications';
import {sortByUniqueDate, getElsByDay} from '../selectors/notificationsSelectors';

const mapStateToProps = (state: any) => ({
	notifications: getElsByDay(state),
	dates: sortByUniqueDate(state),
});

export default connect(mapStateToProps)(Notifications as any);
