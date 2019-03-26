import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

import Settings from '../Settings';
import {withNavigation} from 'react-navigation';

import {changeTemperatureScale} from '../actions/settingsActions';
import {getTemperatureScale} from '../selectors/settingsSelectors';

const mapStateToProps = (state: any) => ({
	temperatureScale: getTemperatureScale(state),
});

export default reduxForm({form: 'user', initialValues: {
	age: 21,
	firstname: 'Piter',
	lastname: 'Parker',
	role: 'admin',
	image: '',
}})(
	connect(mapStateToProps, {changeTemperatureScale})(withNavigation(Settings)) as any,
);
