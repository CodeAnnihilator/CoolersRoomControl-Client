import {connect} from 'react-redux';
import Rooms from '../components/Rooms';

const mapStateToProps = (_: any, {navigation}: any) => ({
	roomID: navigation.getParam('roomID'),
});

export default connect(mapStateToProps)(Rooms);
