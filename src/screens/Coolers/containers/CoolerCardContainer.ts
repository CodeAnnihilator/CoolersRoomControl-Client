import {connect} from 'react-redux';

import CoolerCard from '../components/CoolerCard/CoolerCard';

import {getCoolerByID} from '../selectors/coolersSelectors';

const mapStateToProps = (state: any, {navigation}: any) => {
	const id = navigation.getParam('id');

	return {
		cooler: getCoolerByID(state, id),
	};
};

export default connect(mapStateToProps)(CoolerCard);
