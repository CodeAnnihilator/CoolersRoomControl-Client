import {handleActions} from 'redux-actions';

import {
	EDIT_EVENT,
	CREATE_EVENT,
} from '../constants/notificationsConstants';

import {generateNotifications} from '../../../common/seed/entities';

const initialState = {
	notifications: generateNotifications(10),
};

const notificationsReducer = handleActions({
	[EDIT_EVENT]: (state: any, {payload: {data}}) => ({
		...state,
		notifications: state.notifications.map((item: any) => {
			if (item.id === data.id) {
				return data;
			}

			return item;
		}),
	}),
	[CREATE_EVENT]: (state: any, {payload: {data}}) => ({
		...state,
		notifications: [...state.notifications, data],
	}),
}, initialState);

export default notificationsReducer;
