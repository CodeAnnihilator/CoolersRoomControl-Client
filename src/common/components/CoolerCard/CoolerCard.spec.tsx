import * as React from 'react';
import renderer from 'react-test-renderer';

import CoolerCard from './CoolerCard';

describe('CoolerCard', () => {
	it('+++capturing Snapshot of CoolerCard', () => {
		const cooler = {
			id: 1,
			power: 'power',
			title: 'title',
			series: 'series',
			status: 'status',
			roomID: 0,
			place: 'place',
			source: 'source',
			type: 'type',
			certification: 'certification',
			cop: 'cop',
		};
		const renderedValue = renderer.create(<CoolerCard cooler={cooler} />).toJSON();

		expect(renderedValue).toMatchSnapshot();
	});
});
