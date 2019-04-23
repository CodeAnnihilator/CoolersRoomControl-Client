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
				timeFrom: 'timeFrom',
				timeTo: 'timeTo',
				operation: 'operation',
				temperature: 20,
				humidity: 35,
				weekly: 'weekly',
				description: 'description',
				message: 'message',
				model: 'model',
				serial: 'serial',
				roomID: 1,
			}],
			[{
				id: 1,
				type: 'type',
				date: 'date',
				timeFrom: 'timeFrom',
				timeTo: 'timeTo',
				operation: 'operation',
				temperature: 25,
				humidity: 40,
				weekly: 'weekly',
				description: 'description',
				message: 'message',
				model: 'model',
				serial: 'serial',
				roomID: 1,
			}],
		];
		const navigation = {};
		const renderedValue = renderer.create(
			<Notifications dates={dates} notifications={notifications} navigation={navigation} />,
		).toJSON();

		expect(renderedValue).toMatchSnapshot();
});
});
