import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import entitiesReducer from '../common/reducers/entitiesReducer';
import settingsReducer from '../screens/Settings/reducer/settingsReducer';
import roomsReducer from '../screens/Rooms/reducer/roomsReducer';
import notificationsReducer from '../screens/Notifications/reducer/notificationsReducer';
import schedulerReducer from '../screens/Scheduler/reducer/schedulerReducer';

export default combineReducers({
	entities: entitiesReducer,
	settings: settingsReducer,
	rooms: roomsReducer,
	scheduler: schedulerReducer,
	form: formReducer,
	notifications: notificationsReducer,
});
