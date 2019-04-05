import {connect} from 'react-redux';

import {chooseItemAtGallery} from '../actions/roomsActions';

import {getRoomImagesByID, getChoosenImageAtRoom} from '../selectors/roomsSelectors';

import ImageGallery from '../../../common/components/ImageGallery';

const mapStateToProps = (state: any, {navigation}: any) => {
	const roomID = navigation.getParam('roomID');
	const images = getRoomImagesByID(state, roomID);

	return ({
		roomID,
		images: getRoomImagesByID(state, roomID),
		choosenImage: getChoosenImageAtRoom(state, roomID) || images[0],
	});
};

export default connect(mapStateToProps, {chooseItemAtGallery})(ImageGallery);
