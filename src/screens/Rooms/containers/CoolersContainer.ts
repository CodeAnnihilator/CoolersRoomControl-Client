import {connect} from 'react-redux';

import {getCoolersByRoom} from '../selectors/roomsSelectors';

import Coolers from '../components/Coolers/Coolers';

const mapStateToProps = (state: any, {navigation}: any) => {
	const roomID = navigation.getParam('roomID');

	return {
		coolers: getCoolersByRoom(state, roomID),
	};
};

export default connect(mapStateToProps)(Coolers);
