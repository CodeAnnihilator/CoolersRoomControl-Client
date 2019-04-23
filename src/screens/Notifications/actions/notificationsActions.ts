import {createAction} from 'redux-actions';
import {
	EDIT_EVENT,
	CREATE_EVENT,
} from '../constants/notificationsConstants';

export const editEvent = createAction(
	EDIT_EVENT,
	(data: {[key: string]: any}) => ({data}),
);

export const createEvent = createAction(
	CREATE_EVENT,
	(data: {[key: string]: any}) => ({data}),
);
