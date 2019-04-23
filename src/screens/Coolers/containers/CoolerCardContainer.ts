import {connect} from 'react-redux';

import CoolerCard from '../components/CoolerCard/CoolerCard';

import {getCoolerByID} from '../selectors/coolersSelectors';
import {NavigationComponent} from 'react-navigation';

const mapStateToProps = (state: any, {navigation}: NavigationComponent) => {
	const id = navigation.getParam('id');

	return {
		cooler: getCoolerByID(state, id),
	};
};

export default connect(mapStateToProps)(CoolerCard);
