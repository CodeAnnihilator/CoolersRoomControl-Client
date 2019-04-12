import {connect} from 'react-redux';
import Popover from 'react-native-popover-typescript';

const mapStateToProps = () => ({
	options: [{
		title: 'Set as main',
		id: 0,
		icon: null,
		isStripped: false,
		onSelect: () => console.log('main now'),
	}, {
		title: 'Add image',
		id: 1,
		icon: null,
		isStripped: false,
		onSelect: () => console.log('added new image'),
	}],
});

export default connect(mapStateToProps)(Popover);
