import * as types from '../types/entitiesTypes';

import {arrCoolers} from '../seed/entities';

const INITIAL_STATE = {
	rooms: [],
	coolers: arrCoolers,
	value: 0,
};

const entitiesReducer = (state = INITIAL_STATE, action: {type: string}) => {
	switch (action.type) {
		case types.INCREMENT_VALUE:
			return {...state, value: state.value + 1};
		default:
			return state;
	}
};

export default entitiesReducer;
