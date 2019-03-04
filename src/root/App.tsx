import * as React from 'react';
import {Provider} from 'react-redux';

import configureStore from './configureStore';

import Test from '../screens/Test/TestContainer';

const store = configureStore({});

export default () => (
	<Provider store={store}>
		<Test />
	</Provider>
);
