import {createAction} from 'redux-actions';
import {CHANGE_TEMPERATURE_AT_ROOM, CHANGE_HUMIDITY_AT_ROOM} from '../constants/roomsConstants';

export const changeTemperatureAtRoom = createAction(
	CHANGE_TEMPERATURE_AT_ROOM,
	(roomID: string, type: string) => ({roomID, type}),
);

export const changeHumidityAtRoom = createAction(
	CHANGE_HUMIDITY_AT_ROOM,
	(roomID: string, type: string) => ({roomID, type}),
);
