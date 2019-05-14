import {handleActions} from 'redux-actions';

import {CHOOSE_NOTIFICATIONS_BY_DAY} from '../constants/schedulerConstants';

const initialState = {
	choosenDate: null,
};

const schedulerReducer = handleActions({
	[CHOOSE_NOTIFICATIONS_BY_DAY]: (state: any, {payload: {choosenDate}}) => ({
		...state,
		choosenDate,
	}),
}, initialState);

export default schedulerReducer;
