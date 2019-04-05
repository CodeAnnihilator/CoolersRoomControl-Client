import {handleActions} from 'redux-actions';
import {
	CHANGE_TEMPERATURE_AT_ROOM,
	CHOOSE_IMAGE_GALLERY_ITEM,
	CHANGE_HUMIDITY_AT_ROOM,
	EDIT_DATA_AT_ROOM,
} from '../constants/roomsConstants';

import images from './rooms.images.mock';

const initialState = {
	rooms: [
		{
			id: 0,
			temperature: 29,
			humidity: 85,
			description: 'Company hall',
			square: 31.2,
			height: 2.4,
			title: 'Hall',
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
			images,
			choosenImage: null,
		},
		{
			id: 1,
			title: 'Kitchen',
			temperature: 32,
			description: 'Place for food',
			humidity: 78,
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
			images: [],
			choosenImage: null,
		},
		{
			id: 2,
			temperature: 21,
			title: 'Developers',
			humidity: 92,
			description: 'Developers room',
			square: 31.2,
			height: 2.4,
			coolers: [
				{
					_id: 1,
					power: 610,
				},
				{
					_id: 2,
					power: 680,
				},
			],
			images: [],
			choosenImage: null,
		},
		{
			id: 3,
			temperature: 23,
			humidity: 60,
			title: 'Meeting room 1',
			description: 'Biggest meeting room',
			square: 31.2,
			height: 2.4,
			coolers: [
				{
					_id: 1,
					power: 563,
				},
				{
					_id: 2,
					power: 680,
				},
			],
			images: [],
			choosenImage: null,
		},
		{
			id: 4,
			temperature: 19,
			humidity: 43,
			square: 28.2,
			title: 'Meeting room 2',
			description: 'Small meeting room',
			height: 2.4,
			coolers: [
				{
					_id: 1,
					power: 772,
				},
				{
					_id: 2,
					power: 680,
				},
			],
			images: [],
			choosenImage: null,
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
	[EDIT_DATA_AT_ROOM]: (state: any, {payload: {data, roomID}}) => ({
		...state,
		rooms: state.rooms.map((item: any) => {
			if (item.id === roomID) {
				return {
					...item,
					...data,
				};
			}

			return item;
		}),
	}),
	[CHOOSE_IMAGE_GALLERY_ITEM]: (state: any, {payload: {image, roomID}}) => ({
		...state,
		rooms: state.rooms.map((item: any) => {
			if (item.id === roomID) {
				return {
					...item,
					choosenImage: image,
				};
			}

			return item;
		}),
	}),
}, initialState);

export default roomsReducer;
