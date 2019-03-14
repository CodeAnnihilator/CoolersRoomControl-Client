import {connect} from 'react-redux';
import {changeTemperatureScale} from '../actions/settingsActions';
import {getTemperatureScale} from '../selectors/settingsSelectors';
import SettingsResetPassword from '../components/SettingsResetPassword';

const mapStateToProps = (state: any) => ({
	temperatureScale: getTemperatureScale(state),
});

export default connect(mapStateToProps, {changeTemperatureScale})(SettingsResetPassword);
