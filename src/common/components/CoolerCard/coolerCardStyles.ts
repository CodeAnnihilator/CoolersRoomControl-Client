import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	titleWrapper: {
		flex: 1,
		alignItems: 'center',
		padding: 25,
		borderBottomWidth: 2,
		borderColor: '$gray100',
	},
	optionsWrapper: {
		paddingVertical: 15,
		paddingHorizontal: 25,
		borderBottomWidth: 2,
		borderColor: '$gray100',
	},
	title: {
		fontSize: 17,
		fontWeight: 'bold',
		marginBottom: 7,
	},
	series: {
		fontSize: 11,
		fontWeight: 'bold',
		marginBottom: 14,
	},
	room: {
		fontSize: 13,
		fontWeight: 'bold',
	},
	option: {
		fontSize: 10,
		color: '$gray600',
		marginBottom: 7,
	},
	description: {
		fontSize: 12,
		fontWeight: 'bold',
		color: '$black',
	},
});
