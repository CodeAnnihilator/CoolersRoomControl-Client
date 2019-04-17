import {connect} from 'react-redux';

import {getCoolers} from '../../../common/selectors/entitiesSelectors';

import Coolers from '../Coolers';

const mapStateToProps = (state: any) => ({
		coolers: getCoolers(state),
});

export default connect(mapStateToProps)(Coolers);
