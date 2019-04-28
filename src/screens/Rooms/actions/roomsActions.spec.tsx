import {
	changeTemperatureAtRoom,
	changeHumidityAtRoom,
	editDataAtRoom,
	chooseItemAtGallery,
	saveCoolers,
	bindCoolers,
} from '../actions/roomsActions';

describe('>>>A C T I O N --- Test roomsActions', () => {
	it('+++ actionCreator saveCoolers', () => {
			const save = saveCoolers([{id: 1}], 0);
			expect(save).toEqual({type: '@@ROOMS/SAVE_COOLERS', payload: {coolers: [{id: 1}], roomID: 0}});
	});

	it('+++ actionCreator bindCoolers', () => {
		const bind = bindCoolers([{
			id: 1,
			power: '220',
			title: 'title',
			series: 'series',
			status: 'status',
			roomID: 0,
			place: 'place',
			source: 'source',
			type: 'type',
			certification: 'certification',
			cop: 'cop',
		}]);
		expect(bind).toEqual({type: '@@ROOMS/BIND_COOLERS_TO_ROOM', payload: {coolers: [{
			id: 1,
			power: '220',
			title: 'title',
			series: 'series',
			status: 'status',
			roomID: 0,
			place: 'place',
			source: 'source',
			type: 'type',
			certification: 'certification',
			cop: 'cop',
		}]}});
});

	it('+++ actionCreator changeTemperatureAtRoom', () => {
		const changeTemperature = changeTemperatureAtRoom('1', 'inc');
		expect(changeTemperature).toEqual({type: '@@ROOMS/CHANGE_TEMPERATURE_AT_ROOM', payload: {roomID: '1', type: 'inc'}});
	});

	it('+++ actionCreator changeHumidityAtRoom', () => {
		const changeHumidity = changeHumidityAtRoom('1', 'inc');
		expect(changeHumidity).toEqual({type: '@@ROOMS/CHANGE_HUMIDITY_AT_ROOM', payload: {roomID: '1', type: 'inc'}});
	});

	it('+++ actionCreator editDataAtRoom', () => {
		const editData = editDataAtRoom('1', {title: 'KITCHEN'});
		expect(editData).toEqual({type: '@@ROOMS/EDIT_DATA_AT_ROOM', payload: {roomID: '1', data: {title: 'KITCHEN'}}});
	});

	it('+++ actionCreator chooseItemAtGallery', () => {
		const chooseItem = chooseItemAtGallery('1', 'img');
		expect(chooseItem).toEqual({type: '@@ROOMS/CHOOSE_IMAGE_GALLERY_ITEM', payload: {image: 'img', roomID: '1'}});
	});

});
