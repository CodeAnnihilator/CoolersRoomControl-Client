import {incrementValue} from '../actions/entitiesActions';

describe('>>>A C T I O N --- Test entitiesActions', () => {
	it('+++ actionCreator incrementValue', () => {
		const chooseItem = incrementValue();
		expect(chooseItem).toEqual({type: 'ENTITIES/INCREMENT_VALUE'});
	});
});
