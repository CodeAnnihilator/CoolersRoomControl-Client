import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	wrapper: {
		flex: 1,
	},
	gradient: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	titleBox: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	button: {
		width: 200,
		height: 40,
		marginTop: 20,
		borderRadius: 5,
	},
	circle: {
		width: 60,
		height: 40,
		borderColor: '#45EBFF',
		borderWidth: 5,
		borderRadius: 50,
	},
});
