import {connect} from 'react-redux';

import {incrementValue} from '../../common/actions/entitiesActions';
import {getValue} from '../../common/selectors/entitiesSelectors';

import Test from './Test';

const mapStateToProps = (state: any) => ({
	value: getValue(state),
});

export default connect(mapStateToProps, {
	incrementValue,
})(Test);
