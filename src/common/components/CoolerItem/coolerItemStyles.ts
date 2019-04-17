import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: '$gray94',
	},
	powerWrapper: {
		flex: 1,
		flexDirection: 'row',
		marginBottom: 5,
	},
	titleWrapper: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		fontWeight: 'bold',
	},
	series: {
		fontWeight: 'bold',
		fontSize: 11,
	},
	bage: {
		width: 7,
		height: 7,
		borderRadius: 5,
		marginLeft: 10,
	},
});
