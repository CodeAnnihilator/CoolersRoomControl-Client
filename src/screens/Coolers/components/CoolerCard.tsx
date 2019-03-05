import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';

export default class CoolerCard extends Component {
	render() {
		const {navigation} = this.props;
	
		return (
			<SafeAreaView>
				<Text>
					{JSON.stringify(navigation.getParam('id', 'NO-ID'))}
				</Text>
			</SafeAreaView>
		)
	}
}
