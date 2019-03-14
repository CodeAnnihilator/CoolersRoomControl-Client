import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import entitiesReducer from '../common/reducers/entitiesReducer';
import settingsReducer from '../screens/Settings/reducer/settingsReducer';

export default combineReducers({
	entities: entitiesReducer,
	settings: settingsReducer,
	form: formReducer,
});
