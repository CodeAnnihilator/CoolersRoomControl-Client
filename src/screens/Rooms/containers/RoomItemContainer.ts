import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';

import {getRoomByID} from '../selectors/roomsSelectors';
import {getTemperatureScale} from '../../Settings/selectors/settingsSelectors';

import RoomItem from '../components/RoomItem';

const mapStateToProps = (state: any, {id}: {id: string}) => ({
	room: getRoomByID(state, id),
	temperatureScale: getTemperatureScale(state),
});

export default connect(mapStateToProps)(withNavigation(RoomItem as any));
