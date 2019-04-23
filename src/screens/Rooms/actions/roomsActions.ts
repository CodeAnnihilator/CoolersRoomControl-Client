import {createAction} from 'redux-actions';
import {
	CHANGE_TEMPERATURE_AT_ROOM,
	CHANGE_HUMIDITY_AT_ROOM,
	EDIT_DATA_AT_ROOM,
	CHOOSE_IMAGE_GALLERY_ITEM,
	SAVE_COOLERS,
	BIND_COOLERS_TO_ROOM,
	EDIT_EVENT_FOR_ROOM,
	CREATE_EVENT_FOR_ROOM,
} from '../constants/roomsConstants';

import {ICooler, ISelectedCooler} from '../../../common/types/entitiesTypes';

export const changeTemperatureAtRoom = createAction(
	CHANGE_TEMPERATURE_AT_ROOM,
	(roomID: string, type: string) => ({roomID, type}),
);

export const changeHumidityAtRoom = createAction(
	CHANGE_HUMIDITY_AT_ROOM,
	(roomID: string, type: string) => ({roomID, type}),
);

export const editDataAtRoom = createAction(
	EDIT_DATA_AT_ROOM,
	(roomID: string, data: {[key: string]: any}) => ({roomID, data}),
);

export const chooseItemAtGallery = createAction(
	CHOOSE_IMAGE_GALLERY_ITEM,
	(roomID: string, image: string) => ({image, roomID}),
);

export const saveCoolers = createAction(
	SAVE_COOLERS,
	(coolers: ISelectedCooler[], roomID: number) => ({coolers, roomID}),
);

export const bindCoolers = createAction(
	BIND_COOLERS_TO_ROOM,
	(coolers: ICooler[]) => ({coolers}),
);

export const editEventForRoom = createAction(
	EDIT_EVENT_FOR_ROOM,
	(roomID: number, data: {[key: string]: any}) => ({roomID, data}),
);

export const createEventForRoom = createAction(
	CREATE_EVENT_FOR_ROOM,
	(roomID: number, data: {[key: string]: any}) => ({roomID, data}),
);
