import {createAction} from 'redux-actions';
import {SETTINGS_CHANGE_TEMPERATURE_SCALE} from '../constants/settingsConstants';

export const changeTemperatureScale = createAction(
	SETTINGS_CHANGE_TEMPERATURE_SCALE,
	(temperatureScale: string) => ({temperatureScale}),
);
