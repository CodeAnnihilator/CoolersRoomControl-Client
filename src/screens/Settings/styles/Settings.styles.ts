import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

export default EStyleSheet.create({
	container: {
		backgroundColor: '$gray100',
		flex: 1,
		alignItems: 'center',
	},
	user: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '$gray300',
		paddingVertical: 20,
		width: '100%',
	},
	settingsBox: {
		width: Dimensions.get('screen').width - 40,
		backgroundColor: '$white',
		borderColor: '$gray300',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		borderWidth: 1,
		height: 170,
		marginVertical: 20,
	},
	settingsBoxHeader: {
		display: 'flex',
		justifyContent: 'center',
		color: '$gray600',
		marginTop: 10,
		fontSize: 16,
	},
	settingsTitle: {
		fontSize: 24,
	},
	passwordBox: {
		width: Dimensions.get('screen').width - 40,
		backgroundColor: '$white',
		borderColor: '$gray300',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: 10,
		borderWidth: 1,
		height: 100,
		paddingBottom: 15,
	},
	saveSettings: {
		marginVertical: 20,
	},
});
