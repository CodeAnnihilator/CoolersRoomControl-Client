import {handleActions} from 'redux-actions';

import {generateNotifications} from '../../../common/seed/entities';

const initialState = {
	notifications: generateNotifications(10),
};

const notificationsReducer = handleActions({
	1: (state: any) => state,
}, initialState);

export default notificationsReducer;
