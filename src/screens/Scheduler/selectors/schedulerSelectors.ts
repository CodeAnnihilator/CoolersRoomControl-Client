import dayjs from 'dayjs';
import {createSelector} from 'reselect';

import {getElsByDay, sortByUniqueDate} from '../../Notifications/selectors/notificationsSelectors';
import generateRandomColor from '../../../utils/generateRandomColor';

export const getCurrentScheduleDate = state => state.scheduler.choosenDate;

export const getGroupedDatesForSchedule = createSelector(
	getElsByDay,
	getCurrentScheduleDate,
	(notifications, selectedDate) => notifications.reduce((memo, item) => {
		const currentDate = dayjs(item[0].date).format('YYYY-MM-DD');

		memo[currentDate] = {
			marked: true,
			dots: item.map(dot => ({
				key: dot.id,
				color: generateRandomColor(),
			}))
		}	

		return memo;
	}, {})
);

export const getFilteredDatesForNotifications = createSelector(
	sortByUniqueDate,
	getCurrentScheduleDate,
	(dates, selectedDate) => selectedDate
		? dates.filter(date => dayjs(date).format('YYYY-MM-DD') === selectedDate)
		: dates,
);

export const getNotificationsFilteredByDay = createSelector(
	getElsByDay,
	getCurrentScheduleDate,
	(notifications, selectedDate) => notifications.reduce((memo, item) => {
		if (selectedDate && dayjs(item[0].date).format('YYYY-MM-DD') === selectedDate) {
			memo.push(item);
		} else if (!selectedDate) {
			memo.push(item);
		}

		return memo;
	}, []),
);
