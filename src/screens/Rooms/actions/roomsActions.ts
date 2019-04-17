import {createAction} from 'redux-actions';
import {
	CHANGE_TEMPERATURE_AT_ROOM,
	CHANGE_HUMIDITY_AT_ROOM,
	EDIT_DATA_AT_ROOM,
	CHOOSE_IMAGE_GALLERY_ITEM,
	SAVE_COOLERS,
	BIND_COOLERS_TO_ROOM,
} from '../constants/roomsConstants';

import {ICooler, ISelectedCooler} from '../types/Cooler';

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
	(roomID: string, data: string) => ({roomID, data}),
);

export const chooseItemAtGallery = createAction(
	CHOOSE_IMAGE_GALLERY_ITEM,
	(roomID: string, image: string) => ({image, roomID}),
);

export const saveCoolers = createAction(
	SAVE_COOLERS,
	(coolers: ISelectedCooler, roomID: string) => ({coolers, roomID}),
);

export const bindCoolers = createAction(
	BIND_COOLERS_TO_ROOM,
	(coolers: ICooler) => ({coolers}),
);
