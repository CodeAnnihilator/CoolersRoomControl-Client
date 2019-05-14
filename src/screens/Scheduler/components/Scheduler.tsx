import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {LinearGradient} from 'expo';
import {schedulerTheme} from '../style/schedulerStyle';
import SchedulerNotificationsContainer from '../containers/SchedulerNotificationsContainer';
import dayjs from 'dayjs';

interface IProps {
	chooseDateAtCalendar: (dateString: string) => void;
	dates: {
		[key: string]: Array<{
			selected: boolean;
			marked: boolean;
		}>;
	};
	selectedDate: string;
}

export default class Scheduler extends Component<IProps> {
	protected chooseDateAtCalendar = ({dateString}: {dateString: string}) => this.props.chooseDateAtCalendar(dateString);

	public render() {
		const {dates, selectedDate} = this.props;

		return (
			<>
				<LinearGradient
					colors={['#6f55f3', '#cf5fb9']}
					style={{
						width: '100%',
					}}
				>
					<Calendar
						style={{
							padding: 20,
						}}
						markingType='multi-dot'
						markedDates={dates}
						firstDay={1}
						// lib types error, all ok, look at https://github.com/wix/react-native-calendars#advanced-styling
						theme={schedulerTheme}
						onDayPress={this.chooseDateAtCalendar}
					/>
				</LinearGradient>
				<SchedulerNotificationsContainer />
			</>
		);
	}
}
