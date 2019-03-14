import {connect} from 'react-redux';
import {changeTemperatureScale} from '../actions/settingsActions';
import {getTemperatureScale} from '../selectors/settingsSelectors';
import SettingsSwitchItem from '../components/SettingsSwitchItem';

const mapStateToProps = (state: any) => ({
	temperatureScale: getTemperatureScale(state),
});

export default connect(mapStateToProps, {changeTemperatureScale})(SettingsSwitchItem);
