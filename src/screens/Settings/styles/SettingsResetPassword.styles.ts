import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		backgroundColor: '$gray100',
		flex: 1,
		alignItems: 'center',
	},
	passwordInput: {
		borderBottomWidth: 1,
		borderColor: '$gray300',
		paddingHorizontal: 20,
		paddingVertical: 10,
		width: 250,
	},
	passwordBox: {
		marginVertical: 10,
		marginHorizontal: 20,
	},
	changePwdButton: {
		width: 250,
	},
});