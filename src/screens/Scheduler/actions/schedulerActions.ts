import {createAction} from 'redux-actions';
import {CHOOSE_NOTIFICATIONS_BY_DAY} from '../constants/schedulerConstants';

export const chooseDateAtCalendar = createAction(
	CHOOSE_NOTIFICATIONS_BY_DAY,
	(choosenDate: string) => ({choosenDate}),
);
