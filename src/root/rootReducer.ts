import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import entitiesReducer from '../common/reducers/entitiesReducer';
import settingsReducer from '../screens/Settings/reducer/settingsReducer';
import roomsReducer from '../screens/Rooms/reducer/roomsReducer';

export default combineReducers({
	entities: entitiesReducer,
	settings: settingsReducer,
	rooms: roomsReducer,
	form: formReducer,
});
