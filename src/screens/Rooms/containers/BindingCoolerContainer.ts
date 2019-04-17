import {connect} from 'react-redux';

import BindingCooler from '../components/BindingCooler/BindingCooler';

import {getFreeCoolers} from '../selectors/roomsSelectors';

const mapStateToProps = (state: any) => ({
	coolers: getFreeCoolers(state),
});

export default connect(mapStateToProps)(BindingCooler);
