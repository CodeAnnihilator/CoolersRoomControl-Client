import * as React from 'react';
import renderer from 'react-test-renderer';

import NotificationsTemplate from './NotificationsTemplate';

describe('NotificationsTemplate', () => {
	it('+++capturing Snapshot of NotificationsTemplate', () => {
		const dates = [1556527572377, 1556527583146];
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
		const renderedValue =  renderer.create(
			<NotificationsTemplate dates={dates} notifications={notifications} />,
		).toJSON();

		expect(renderedValue).toMatchSnapshot();
	});
});
