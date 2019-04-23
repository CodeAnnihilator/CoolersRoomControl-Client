import {connect} from 'react-redux';
import {NavigationComponent} from 'react-navigation';

import {chooseItemAtGallery} from '../actions/roomsActions';

import {getRoomImagesByID, getChoosenImageAtRoom} from '../selectors/roomsSelectors';

import ImageGallery from '../../../common/components/ImageGallery';

const mapStateToProps = (state: any, {navigation}: NavigationComponent) => {
	const roomID = navigation.getParam('roomID');
	const images = getRoomImagesByID(state, roomID);

	return ({
		roomID,
		images: getRoomImagesByID(state, roomID),
		choosenImage: getChoosenImageAtRoom(state, roomID) || images[0],
	});
};

export default connect(mapStateToProps, {chooseItemAtGallery})(ImageGallery);
