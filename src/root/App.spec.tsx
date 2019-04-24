import * as React from 'react';
import {create} from 'react-test-renderer';

import App, {asyncLoadingFonts} from './App';

describe('App', () => {
	it('renders with async fonts being loaded', async () => {
		try {
			await asyncLoadingFonts(); // TODO: test w/wo fonts
			const tree = create(<App />).toJSON();

			return expect(tree).toMatchSnapshot();
		} catch (e) {
			expect(e).toMatch('error');
		}
	});
});
