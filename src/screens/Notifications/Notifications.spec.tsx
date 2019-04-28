import * as React from 'react';
import renderer from 'react-test-renderer';

import Notifications from '../Notifications/Notifications';

describe('Notifications', () => {
	it('+++capturing Snapshot of Notifications', () => {
		const dates = [111, 222];
		const notifications = [
			[{
				id: 1,
				type: 'type',
				date: 'date',
				time: 'time',
				operation: 'operation',
				temperature: 'temperature',
				humidity: 'humidity',
				weekly: true,
				description: 'description',
				message: 'message',
				model: 'model',
				serial: 'serial',
				roomId: 1,
			}],
			[{
				id: 1,
				type: 'type',
				date: 'date',
				time: 'time',
				operation: 'operation',
				temperature: 'temperature',
				humidity: 'humidity',
				weekly: true,
				description: 'description',
				message: 'message',
				model: 'model',
				serial: 'serial',
				roomId: 1,
			}],
		];
		const renderedValue =  renderer.create(<Notifications dates={dates} notifications={notifications} />).toJSON();

		expect(renderedValue).toMatchSnapshot();
});
});
