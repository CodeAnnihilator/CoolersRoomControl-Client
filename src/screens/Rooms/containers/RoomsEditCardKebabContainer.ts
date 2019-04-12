import {connect} from 'react-redux';
import Popover from 'react-native-popover-typescript';

const mapStateToProps = (_: any, {navigation}: any) => ({
	options: [{
		title: 'Edit room',
		id: 0,
		icon: null,
		isStripped: false,
		onSelect: () => navigation.navigate('EditRoomCard', {roomID: navigation.getParam('roomID')}),
	}],
});

export default connect(mapStateToProps)(Popover);
