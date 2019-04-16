import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';

import Rooms from '../components/RoomsListView';
import {getRooms} from '../selectors/roomsSelectors';

const mapStateToProps = (state: any) => ({
	rooms: getRooms(state),
});

export default connect(mapStateToProps)(withNavigation(Rooms as any));
