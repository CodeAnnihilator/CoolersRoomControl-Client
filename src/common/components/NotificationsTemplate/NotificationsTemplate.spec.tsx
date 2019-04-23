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
				dateFrom: 'dateFrom',
				dateTo: 'dateTo',
				timeFrom: 'timeFrom',
				timeTo: 'timeTo',
				operation: 'operation',
				temperature: 23,
				humidity: 30,
				weekly: 'weekly',
				description: 'description',
				message: 'message',
				model: 'model',
				serial: 'serial',
				roomID: 1,
				title: 'title',
				alert: 'alert',
			}],
			[{
				id: 1,
				type: 'type',
				date: 'date',
				dateFrom: 'dateFrom',
				dateTo: 'dateTo',
				timeFrom: 'timeFrom',
				timeTo: 'timeTo',
				operation: 'operation',
				temperature: 21,
				humidity: 55,
				weekly: 'weekly',
				description: 'description',
				message: 'message',
				model: 'model',
				serial: 'serial',
				roomID: 1,
				title: 'title',
				alert: 'alert',
			}],
		];
		const renderedValue =  renderer.create(
			<NotificationsTemplate dates={dates} notifications={notifications} editEvent={() => null} />,
		).toJSON();

		expect(renderedValue).toMatchSnapshot();
	});
});
