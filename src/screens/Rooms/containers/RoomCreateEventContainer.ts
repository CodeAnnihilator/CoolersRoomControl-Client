import {connect} from 'react-redux';
import {reduxForm, getFormValues} from 'redux-form';
import {batchActions} from 'redux-batched-actions';
import {NavigationComponent} from 'react-navigation';

import {createEventForRoom} from '../actions/roomsActions';

import EditEvent from '../../../common/components/EditEvent/EditEvent';

const mapStateToProps = (state: any, {navigation}: NavigationComponent) => {
	const roomID = navigation.getParam('roomID');
	const dateNow = new Date();

	return {
		formValues: getFormValues('RoomCreateEvent')(state),
		roomID,
		initialValues: {
			id: Math.floor(1000 + Math.random() * 9000),
			type: 'notification',
			date: dateNow.toString(),
			dateFrom: '',
			dateTo: '',
			timeFrom: '',
			timeTo: '',
			operation: '',
			temperature: 0,
			humidity: 0,
			weekly: '',
			description: '',
			roomID,
			title: '',
			alert: '',
		},
	};
};

const mergeProps = (stateProps: any, dispatchProps: any, {navigation}: NavigationComponent) => ({
	...stateProps,
	...dispatchProps,
	onSubmit: () => batchActions([
		dispatchProps.createEventForRoom(stateProps.roomID, stateProps.formValues),
		navigation.goBack(),
	]),
});

export default connect(mapStateToProps, {createEventForRoom}, mergeProps)(reduxForm({
	form: 'RoomCreateEvent',
})(EditEvent as any));
