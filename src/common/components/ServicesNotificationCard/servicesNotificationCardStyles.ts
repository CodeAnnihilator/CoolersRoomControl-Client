import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	contentWrapper: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 32,
		paddingVertical: 15,
		borderBottomWidth: 2,
		borderColor: '$gray100',
	},
	servicesInfo: {
		flexDirection: 'row',
	},
	imageWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 64,
		height: 64,
		marginRight: 14,
		borderRadius: 32,
		backgroundColor: '$gray100',
	},
	image: {
		width: 64,
		height: 64,
		marginRight: 14,
		borderRadius: 32,
	},
	infoWrapper: {
		flex: 1,
		marginTop: 10,
	},
	time: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	textBold: {
		fontWeight: 'bold',
	},
	textWrapper: {
		fontSize: 12,
	},
});
