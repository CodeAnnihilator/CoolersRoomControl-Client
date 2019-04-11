import {connect} from 'react-redux';

import {getCoolers} from '../selectors/coolersSelectors';

import Cooler from '../Coolers';

const mapStateToProps = (state: any) => ({
		coolers: getCoolers(state),
});

export default connect(mapStateToProps)(Cooler);
