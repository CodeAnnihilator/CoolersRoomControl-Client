import {connect} from 'react-redux';
import {reduxForm, getFormValues} from 'redux-form';
import {batchActions} from 'redux-batched-actions';
import {NavigationComponent} from 'react-navigation';

import {editEventForRoom} from '../actions/roomsActions';

import EditEvent from '../../../common/components/EditEvent/EditEvent';

const mapStateToProps = (state: any, {navigation}: NavigationComponent) => {
	const notification = navigation.getParam('notification');
	const roomID = navigation.getParam('roomID');

	return {
		formValues: getFormValues('RoomEditEvent')(state),
		notification,
		roomID,
		initialValues: notification,
	};
};

const mergeProps = (stateProps: any, dispatchProps: any, {navigation}: NavigationComponent) => ({
	...stateProps,
	...dispatchProps,
	onSubmit: () => batchActions([
		dispatchProps.editEventForRoom(stateProps.roomID, stateProps.formValues),
		navigation.goBack(),
	]),
});

export default connect(mapStateToProps, {editEventForRoom}, mergeProps)(reduxForm({
	form: 'RoomEditEvent',
})(EditEvent as any));
