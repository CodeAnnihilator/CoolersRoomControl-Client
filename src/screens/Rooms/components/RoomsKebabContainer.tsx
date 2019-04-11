import {connect} from 'react-redux';
import Popover from '../../../common/components/Popover';

const mapStateToProps = (_: any, {navigation}: any) => ({
	options: [{
		title: 'Add room',
		id: 0,
		icon: null,
		isStripped: false,
		onSelect: () => navigation.navigate('roomAdd'),
	}],
});

export default connect(mapStateToProps)(Popover);
