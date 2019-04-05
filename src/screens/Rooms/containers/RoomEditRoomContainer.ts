import {connect} from 'react-redux';
import {reduxForm, getFormValues} from 'redux-form';

import {getRoomByID} from '../selectors/roomsSelectors';
import {getTemperatureScale} from '../../Settings/selectors/settingsSelectors';

import {editDataAtRoom} from '../actions/roomsActions';

import RoomEditRoom from '../components/RoomEditRoom';

const mapStateToProps = (state: any, {navigation}: any) => {
	const roomID = navigation.getParam('roomID');
	const room = getRoomByID(state, roomID);

	return ({
		formValues: getFormValues('editRoom')(state),
		roomID,
		room,
		initialValues: room,
		temperatureScale: getTemperatureScale(state),
	});
};

const mergeProps = (stateProps: any, dispatchProps: any) => ({
	...stateProps,
	...dispatchProps,
	onSubmit: () => dispatchProps.editDataAtRoom(stateProps.roomID, stateProps.formValues),
});

export default connect(mapStateToProps, {editDataAtRoom}, mergeProps)(reduxForm({
	form: 'editRoom',
})(RoomEditRoom));
