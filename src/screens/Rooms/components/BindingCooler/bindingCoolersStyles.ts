import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: '$gray94',
	},
	powerWrapper: {
		flex: 1,
		flexDirection: 'row',
		marginBottom: 5,
	},
	title: {
		fontWeight: 'bold',
	},
	series: {
		fontWeight: 'bold',
		fontSize: 11,
		marginBottom: 15,
	},
	button: {
		flex: 1,
		width: 100,
		height: 34,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 2,
	},
	textButton: {
		color: '$white',
		fontSize: 12,
		fontWeight: 'bold',
	},
	cancel: {
		backgroundColor: '$red500',
	},
	bind: {
		backgroundColor: '$bluebutton',
	},
});
