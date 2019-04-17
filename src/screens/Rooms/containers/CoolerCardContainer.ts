import {connect} from 'react-redux';
import {NavigationComponent} from 'react-navigation';

import CoolerCard from '../../../common/components/CoolerCard/CoolerCard';

import {getCoolerByID} from '../selectors/roomsSelectors';

const mapStateToProps = (state: any, {navigation}: NavigationComponent) => {
	const id = navigation.getParam('id');

	return {
		cooler: getCoolerByID(state, id),
	};
};

export default connect(mapStateToProps)(CoolerCard);
