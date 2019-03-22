import {createSelector} from 'reselect';

export const getRooms = (state: any) => state.rooms.rooms;

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
			return room.coolers.reduce((memo: number, item: {power: number}) => memo = memo + item.power, 0);
		}

		return 0;
	},
);
