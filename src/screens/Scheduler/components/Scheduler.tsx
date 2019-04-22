import React, {Component} from 'react';
import {
StyleSheet,
ScrollView,
} from 'react-native';
import {Calendar} from 'react-native-calendars';

export default class Scheduler extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.onDayPress = this.onDayPress.bind(this);
	}

	render() {
		return (
		<ScrollView style={styles.container}>
			<Calendar
				style={styles.calendar}
				current={'2012-05-16'}
				minDate={'2012-05-10'}
				maxDate={'2012-05-29'}
				firstDay={1}
				markedDates={{
					'2012-05-23': {selected: true, marked: true},
					'2012-05-24': {selected: true, marked: true, dotColor: 'green'},
					'2012-05-25': {marked: true, dotColor: 'red'},
					'2012-05-26': {marked: true},
					'2012-05-27': {disabled: true, activeOpacity: 0},
				}}
			/>
		</ScrollView>
		);
	}

	onDayPress(day) {
		this.setState({
			selected: day.dateString
		});
	}
}

const styles = StyleSheet.create({
	calendar: {
		borderTopWidth: 1,
		paddingTop: 5,
		borderBottomWidth: 1,
		borderColor: '#eee',
		height: 350
	},
	text: {
		textAlign: 'center',
		borderColor: '#bbb',
		padding: 10,
		backgroundColor: '#eee'
	},
	container: {
		flex: 1,
	},
});
