import {handleActions} from 'redux-actions';

import {generateNotifications} from '../../../common/seed/entities';

const initialState = {
	notifications: generateNotifications(10),
};

const notificationsReducer = handleActions({
}, initialState);

export default notificationsReducer;
