import * as React from 'react';
import renderer from 'react-test-renderer';

import Coolers from './Coolers';

describe('Coolers', () => {
	it('+++capturing Snapshot of Notifications', () => {
		const arrCoolers = [{
			id: 1,
			power: 'power',
			title: 'title',
			series: 'series',
			status: 'status',
			roomID: 1,
			place: 'place',
			source: 'source',
			type: 'type',
			certification: 'certification',
			cop: 'cop',
		}];
		const navigation = null;

		const renderedValue =  renderer.create(<Coolers coolers={arrCoolers} navigation={navigation} />).toJSON();

		expect(renderedValue).toMatchSnapshot();
});
});
