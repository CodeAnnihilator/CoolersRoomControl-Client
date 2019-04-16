import {connect} from 'react-redux';
import RoomsCarouselView from '../components/RoomsCarouselView';
import {getRooms} from '../selectors/roomsSelectors';
import {getTemperatureScale} from '../../Settings/selectors/settingsSelectors';

export default connect((state: any) => ({
	rooms: getRooms(state),
	temperatureScale: getTemperatureScale(state),
}))(RoomsCarouselView);
