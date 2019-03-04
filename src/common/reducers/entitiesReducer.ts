import * as types from '../types/entitiesTypes';

const INITIAL_STATE = {
	rooms: [],
	coolers: [],
	value: 0,
};

const entitiesReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case types.INCREMENT_VALUE:
			return {...state, value: state.value + 1};
		default:
			return state;
	}
};

export default entitiesReducer;
