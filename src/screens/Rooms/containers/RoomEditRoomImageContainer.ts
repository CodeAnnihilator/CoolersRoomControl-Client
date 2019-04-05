import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';

import {chooseItemAtGallery} from '../actions/roomsActions';

import RoomEditRoomImage from '../components/RoomEditRoomImage';

export default connect(null, {chooseItemAtGallery})(withNavigation(RoomEditRoomImage));
