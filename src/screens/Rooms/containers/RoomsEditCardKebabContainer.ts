import {connect} from 'react-redux';
import Popover from 'react-native-popover-typescript';
import {NavigationComponent} from 'react-navigation';

const mapStateToProps = (_: any, {navigation}: NavigationComponent) => ({
	options: [{
		title: 'Edit room',
		id: 0,
		icon: null,
		isStripped: false,
		onSelect: () => navigation.navigate('EditRoomCard', {roomID: navigation.getParam('roomID')}),
	}],
});

export default connect(mapStateToProps)(Popover);
