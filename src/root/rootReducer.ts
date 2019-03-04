import {combineReducers} from 'redux';

import entitiesReducer from '../common/reducers/entitiesReducer';

export default combineReducers({
	entities: entitiesReducer,
});
