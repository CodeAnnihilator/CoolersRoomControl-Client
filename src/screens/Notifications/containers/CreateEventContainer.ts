import {connect} from 'react-redux';
import {reduxForm, getFormValues} from 'redux-form';
import {batchActions} from 'redux-batched-actions';
import {NavigationComponent} from 'react-navigation';

import {createEvent} from '../actions/notificationsActions';

import EditEvent from '../../../common/components/EditEvent/EditEvent';

const mapStateToProps = (state: any) => {
	const dateNow = new Date();

	return {
		formValues: getFormValues('CreateEvent')(state),
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
			roomID: '',
			title: '',
			alert: '',
		},
	};
};

const mergeProps = (stateProps: any, dispatchProps: any, {navigation}: NavigationComponent) => ({
	...stateProps,
	...dispatchProps,
	onSubmit: () => batchActions([
		dispatchProps.createEvent(stateProps.formValues),
		navigation.goBack(),
	]),
});

export default connect(mapStateToProps, {createEvent}, mergeProps)(reduxForm({
	form: 'CreateEvent',
})(EditEvent as any));
