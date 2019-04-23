import {connect} from 'react-redux';
import Rooms from '../components/Rooms';
import {NavigationComponent} from 'react-navigation';

const mapStateToProps = (_: any, {navigation}: NavigationComponent) => ({
	roomID: navigation.getParam('roomID'),
});

export default connect(mapStateToProps)(Rooms);
