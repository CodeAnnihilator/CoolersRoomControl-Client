import entitiesReducer, {initialState} from './entitiesReducer';
import * as t from '../../screens/Rooms/constants/roomsConstants';

describe('entitiesReducer', () => {
	it('BIND_COOLERS_TO_ROOM', () => {
		const action = {
			type: t.BIND_COOLERS_TO_ROOM,
			payload: {
				coolers: [{
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
				}],
			},
		};

		expect(entitiesReducer(initialState, action).coolers).toEqual([{
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
	});
});
