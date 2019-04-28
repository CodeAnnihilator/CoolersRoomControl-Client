import roomsReducer, {initialState} from '../reducer/roomsReducer';
import * as t from '../constants/roomsConstants';

describe('roomsReducer', () => {
	it('CHANGE_TEMPERATURE_AT_ROOM', () => {
		const action = {
			type: t.CHANGE_TEMPERATURE_AT_ROOM,
			payload: {
				type: 'dec',
				roomID: 1,
			},
		};

		expect(roomsReducer(initialState, action).rooms[1]).toEqual({
			id: 1,
			title: 'Kitchen',
			temperature: 31,
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
		});
	});

	it('CHANGE_HUMIDITY_AT_ROOM', () => {
		const action = {
			type: t.CHANGE_HUMIDITY_AT_ROOM,
			payload: {
				type: 'inc',
				roomID: 1,
			},
		};

		expect(roomsReducer(initialState, action).rooms[1]).toEqual({
			id: 1,
			title: 'Kitchen',
			temperature: 32,
			description: 'Place for food',
			humidity: 79,
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
		});
	});

	it('EDIT_DATA_AT_ROOM', () => {
		const action = {
			type: t.EDIT_DATA_AT_ROOM,
			payload: {
				roomID: 1,
				data: {title: 'KITCHEN'},
			},
		};

		expect(roomsReducer(initialState, action).rooms[1]).toEqual({
			id: 1,
			title: 'KITCHEN',
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
		});
	});

	it('CHOOSE_IMAGE_GALLERY_ITEM', () => {
		const action = {
			type: t.CHOOSE_IMAGE_GALLERY_ITEM,
			payload: {
				roomID: 1,
				image: '',
			},
		};

		expect(roomsReducer(initialState, action).rooms[1]).toEqual({
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
			choosenImage: '',
		});
	});
});
