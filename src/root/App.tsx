import * as React from 'react';
import {Provider} from 'react-redux';

import EStyleSheet from 'react-native-extended-stylesheet';
import {createAppContainer} from 'react-navigation';

import AppNavigator from '../navigation/components/index';

import COLORS from '../common/constants/colors';

import configureStore from './configureStore';

EStyleSheet.build(COLORS);

const store = configureStore({});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
	public render() {
		return (
			<Provider store={store}>
				<AppContainer />
			</Provider>
		);
	}
}
