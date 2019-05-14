import {Font} from 'expo';
import * as React from 'react';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import COLORS from '../common/constants/colors';

import configureStore from './configureStore';

import AppNavigator from '../navigation/components/index';

EStyleSheet.build(COLORS);

const store = configureStore({});

const AppContainer = createAppContainer(AppNavigator);

interface IAppState {
	isFontLoaded: boolean,
}

export default class App extends React.Component<{}, IAppState> {
	public state = {
		isFontLoaded: false,
	};

	public async componentDidMount() {
		await Font.loadAsync({
			'DIN': require('../assets/fonts/D-DIN.ttf'),
			'DIN-bold': require('../assets/fonts/D-DIN-Bold.ttf'),
			'Larke': require('../assets/fonts/Larke-thin.ttf'),
			'Larke-bold': require('../assets/fonts/Larke-Bold.ttf'),
		});

		this.setState({isFontLoaded: true});
	}

	public render() {
		return (
			<Provider store={store}>
				{this.state.isFontLoaded ? <AppContainer /> : null}
			</Provider>
		);
	}
}
