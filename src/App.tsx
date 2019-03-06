import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './navigation/components/index';

import COLORS from './common/constants/colors';

EStyleSheet.build(COLORS);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
	public render() {
		return <AppContainer />;
	}
}
