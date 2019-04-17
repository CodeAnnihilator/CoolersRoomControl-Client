import {createSelector} from 'reselect';
import R from 'ramda';

import {dayInMilliseconds} from '../../../common/constants/entities';
import {dateInUnix, startOfDay} from '../../../common/utils/entities';
import {getCoolers} from '../../../common/selectors/entitiesSelectors';

export const getRooms = (state: any) => state.rooms.rooms;
export const getNotificationsByRooms = (state: any) => state.rooms.notificationsByRooms;

export const getRoomByID = createSelector(
	getRooms,
	(_: any, id: string) => id,
	(rooms, id) => rooms.find((item: any) => item.id === id) || {},
);

export const getPowerAtRoom = createSelector(
	getRooms,
	(_: any, id: string) => id,
	(rooms, id) => {
		const room = rooms.find((item: any) => item.id === id);

		if (room) {
			//tslint:disable-next-line
			return room.coolers.reduce((memo: number, item: {power: number}) => memo = memo + item.power, 0);
		}

		return 0;
	},
);

export const getRoomImagesByID = createSelector(
	getRooms,
	(_: any, id: string) => id,
	(rooms, id) => (rooms.find((item: any) => item.id === id) || {}).images || [],
);

export const getChoosenImageAtRoom = createSelector(
	getRooms,
	(_: any, id: string) => id,
	(rooms, id) => (rooms.find((item: any) => item.id === id) || {}).choosenImage,
);

export const getNotificationsByRoom = createSelector(
	getNotificationsByRooms,
	(_: any, id: number) => id,
	(notifications, id) => notifications.filter((notification: any) => notification.id === id)[0] || {},
);

export const getArrDates = createSelector(
	getNotificationsByRoom,
	notifications => R.map(R.view(R.lensProp('date')))(notifications.data),
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
	[getNotificationsByRoom, sortByUniqueDate],
	(notifications, dates) =>
		dates.map(date => {
			const sortByDate = (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime();
			const filterDates = (el: any) => dateInUnix(el) >= date && dateInUnix(el) < (date + dayInMilliseconds);
			const sortDates = R.sort(sortByDate, notifications.data);

			return R.filter(filterDates, sortDates);
		}),
);

export const getCoolersByRoom = createSelector(
	getCoolers,
	(_: any, id: number) => id,
	(coolers, id) => coolers.filter((el: any) => el.roomID === id),
);

export const getCoolerByID = createSelector(
	getCoolers,
	(_: any, id: number) => id,
	(coolers, id) => coolers.find((el: any) => el.id === id) || {},
);

export const getFreeCoolers = createSelector(
	getCoolers,
	coolers => coolers.filter((el: any) => el.roomID === null),
);
