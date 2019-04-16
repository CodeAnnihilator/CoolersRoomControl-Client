import {connect} from 'react-redux';
import Popover from 'react-native-popover-typescript';

const mapStateToProps = (_: any, {navigation}: any) => ({
	options: [{
		title: 'Add room',
		id: 0,
		icon: null,
		isStripped: false,
		onSelect: () => navigation.navigate('AddRoomCard'),
	}, {
		title: 'Change orientation',
		id: 1,
		icon: null,
		isStripped: true,
		onSelect: navigation.state.params.changeOrientation,
	}],
});

export default connect(mapStateToProps)(Popover);
