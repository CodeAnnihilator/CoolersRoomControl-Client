import {connect} from 'react-redux';
import Scheduler from '../components/Scheduler';
import {chooseDateAtCalendar} from '../actions/schedulerActions';
import {getGroupedDatesForSchedule, getCurrentScheduleDate} from '../selectors/schedulerSelectors';

const mapStateToProps = state => ({
	dates: getGroupedDatesForSchedule(state),
	selectedDate: getCurrentScheduleDate(state),
});

export default connect(mapStateToProps, {chooseDateAtCalendar})(Scheduler);
