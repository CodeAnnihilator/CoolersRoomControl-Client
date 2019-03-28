import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		flex: 1,
	},
	cardWrapper: {
		flex: 1,
		flexDirection: 'row',
	},
	border: {
		display: 'flex',
		alignItems: 'center',
		width: 74,
		backgroundColor: '$gray100',
	},
		date: {
		fontSize: 14,
		fontWeight: 'bold',
		paddingTop: 36,
		color: '$black',
		textTransform: 'uppercase',
	},
	content: {
		flex: 1,
		flexDirection: 'column',
	},
});