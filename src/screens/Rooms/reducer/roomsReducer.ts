import {handleActions} from 'redux-actions';
import {CHANGE_TEMPERATURE_AT_ROOM, CHANGE_HUMIDITY_AT_ROOM} from '../constants/roomsConstants';

const initialState = {
	rooms: [
		{
			id: 0,
			temperature: 29,
			humidity: 85,
			square: 31.2,
			height: 2.4,
			coolers: [
				{
					_id: 1,
					power: 600,
				},
				{
					_id: 2,
					power: 680,
				},
			],
		},
	],
};

const roomsReducer = handleActions({
	[CHANGE_TEMPERATURE_AT_ROOM]: (state: any, {payload: {type, roomID}}) => ({
		...state,
		rooms: state.rooms.map((item: any) => {
			if (item.id === roomID) {
				return {
					...item,
					temperature: type === 'inc' ? Number(item.temperature) + 1 : item.temperature - 1,
				};
			}

			return item;
		}),
	}),
	[CHANGE_HUMIDITY_AT_ROOM]: (state: any, {payload: {type, roomID}}) => ({
		...state,
		rooms: state.rooms.map((item: any) => {
			if (item.id === roomID) {
				return {
					...item,
					humidity: type === 'inc' ? Number(item.humidity) + 1 : item.humidity - 1,
				};
			}

			return item;
		}),
	}),
}, initialState);

export default roomsReducer;
