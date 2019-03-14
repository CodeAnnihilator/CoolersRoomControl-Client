import {handleActions} from 'redux-actions';
import {SETTINGS_CHANGE_TEMPERATURE_SCALE} from '../constants/settingsConstants';

const initialState = {
	temperatureScale: 'celsius',
};

const settingsReducer = handleActions({
	[SETTINGS_CHANGE_TEMPERATURE_SCALE]: (state: any, {payload: {temperatureScale}}) => ({
		...state,
		temperatureScale,
	}),
}, initialState);

export default settingsReducer;
