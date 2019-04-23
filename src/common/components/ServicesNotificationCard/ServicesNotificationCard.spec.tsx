import * as React from 'react';
import renderer from 'react-test-renderer';

import ServicesNotificationCard from './ServicesNotificationCard';

describe('ServicesNotificationCard', () => {
	it('+++capturing Snapshot of ServicesNotificationCard', () => {
		const notification = {
			id: 1,
			type: 'type',
			date: 'date',
			timeFrom: 'timeFrom',
			timeTo: 'timeTo',
			message: 'message',
			model: 'model',
			serial: 'serial',
			roomID: 1,
		};
		const renderedValue = renderer.create(<ServicesNotificationCard notification={notification} />).toJSON();

		expect(renderedValue).toMatchSnapshot();
	});
});
