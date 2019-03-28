import {createSelector} from 'reselect';
import R from 'ramda';

import {dayInMilliseconds} from '../../../common/constants/entities';
import {dateInUnix, startOfDay} from '../../../common/utils/entities';

export const getNotifications = (state: any) => state.notifications.notifications;

export const getArrDates = createSelector(
	getNotifications,
	notifications => R.map(R.view(R.lensProp('date')))(notifications),
);

export const datesInUnix = createSelector(
	getArrDates,
	arrDates => arrDates
		.map((date: any) => new Date(date))
		.map(date => startOfDay(date).getTime()),
);

export const uniqDateInUnix = createSelector(
	datesInUnix,
	dates => R.uniq(dates),
);

export const sortByUniqueDate = createSelector(
	uniqDateInUnix,
	dates => {
		const sortByDate = (a: any, b: any) => new Date(b).getTime() - new Date(a).getTime();

		return R.sort(sortByDate, dates);
	},
);

export const getElsByDay = createSelector(
	[getNotifications, sortByUniqueDate],
	(notifications, dates) =>
		dates.map(date => {
			const sortByDate = (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime();
			const filterDates = (el: any) => dateInUnix(el) >= date && dateInUnix(el) < (date + dayInMilliseconds);
			const sortDates = R.sort(sortByDate, notifications);

			return R.filter(filterDates, sortDates);
		}),
);
