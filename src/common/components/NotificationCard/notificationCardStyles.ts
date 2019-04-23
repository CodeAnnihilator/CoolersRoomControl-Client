import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	contentWrapper: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 25,
		paddingVertical: 15,
		borderBottomWidth: 2,
		borderColor: '$gray100',
	},
	userInfo: {
		flexDirection: 'row',
		marginBottom: 20,
	},
	image: {
		width: 64,
		height: 64,
		marginRight: 14,
		borderRadius: 32,
	},
	info: {
		flex: 1,
		marginTop: 10,
	},
	time: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	indicatorWrapper: {
		flexDirection: 'row',
	},
	thermometer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	drop: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textIndicator: {
		fontSize: 14,
		fontWeight: 'bold',
		marginLeft: 5,
	},
	bageWrapper: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	bageWeekly: {
		width: 67,
		height: 25,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4,
		backgroundColor: '$bage',
	},
	descriptionWrapper: {
		marginTop: 16,
	},
	bageText: {
		fontSize: 12,
		fontWeight: 'bold',
		color: '$white',
		textTransform: 'uppercase',
	},
	textBold: {
		fontWeight: 'bold',
	},
	textWrapper: {
		fontSize: 12,
	},
	scheduled: {
		color: '$bage',
	},
	manually: {
		color: '$blue500',
	},
});
