import {connect} from 'react-redux';
import Settings from '../Settings';
import {changeTemperatureScale} from '../actions/settingsActions';
import {getTemperatureScale} from '../selectors/settingsSelectors';

const mapStateToProps = (state: any) => ({
	temperatureScale: getTemperatureScale(state),
});

export default connect(mapStateToProps, {changeTemperatureScale})(Settings);
