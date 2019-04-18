import EStyleSheet from 'react-native-extended-stylesheet';
import {SCREEN_WIDTH} from '../../../common/constants/constants';

export default EStyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: SCREEN_WIDTH - 120,
	},
	imageContainer: {
		width: 50,
		height: 50,
	},
	title: {
		fontSize: 14,
	},
});
