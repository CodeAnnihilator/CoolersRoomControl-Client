import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	indicatorWrapper: {
		flex: 1,
		alignItems: 'center',
		paddingVertical: 15,
		borderBottomWidth: 2,
		borderColor: '$gray100',
	},
	indicator: {
		display: 'flex',
		flexDirection: 'row',
	},
	descriptionWrapper: {
		flex: 1,
		padding: 15,
		borderBottomWidth: 2,
		borderColor: '$gray100',
		justifyContent: 'center',
	},
	dropdownWrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	dateWrapper: {
		flex: 1,
		flexDirection: 'row',
		borderBottomWidth: 2,
		borderColor: '$gray100',
		justifyContent: 'center',
	},
	dayWrapper: {
		width: '70%',
		padding: 15,
		borderRightWidth: 2,
		borderColor: '$gray100',
	},
	timeWrapper: {
		width: '30%',
		flex: 1,
		justifyContent: 'flex-end',
		padding: 15,
	},
	controlButton: {
		width: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	wrapper: {
		display: 'flex',
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: '$gray100',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		flex: 1,
		fontSize: 12,
		fontWeight: 'bold',
	},
});
