import {connect} from 'react-redux';
import {reduxForm, getFormValues} from 'redux-form';
import {batchActions} from 'redux-batched-actions';
import {NavigationComponent} from 'react-navigation';

import {editEvent} from '../actions/notificationsActions';

import EditEvent from '../../../common/components/EditEvent/EditEvent';

const mapStateToProps = (state: any, {navigation}: NavigationComponent) => {
	const notification = navigation.getParam('notification');
	const roomID = navigation.getParam('roomID');

	return {
		formValues: getFormValues('EditEvent')(state),
		notification,
		roomID,
		initialValues: notification,
	};
};

const mergeProps = (stateProps: any, dispatchProps: any, {navigation}: NavigationComponent) => ({
	...stateProps,
	...dispatchProps,
	onSubmit: () => batchActions([
		dispatchProps.editEvent(stateProps.formValues),
		navigation.goBack(),
	]),
});

export default connect(mapStateToProps, {editEvent}, mergeProps)(reduxForm({
	form: 'EditEvent',
})(EditEvent as any));
