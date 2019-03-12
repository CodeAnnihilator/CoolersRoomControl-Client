import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import entitiesReducer from '../common/reducers/entitiesReducer';

export default combineReducers({
	entities: entitiesReducer,
	form: formReducer,
});
