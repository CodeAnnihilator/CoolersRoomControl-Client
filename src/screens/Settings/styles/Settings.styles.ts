import EStyleSheet from 'react-native-extended-stylesheet';

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
		borderBottomColor: '$whitesmoke',
		paddingVertical: 20,
		width: '100%',
	},
	userAvatarBox: {
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '$whitesmoke',
		paddingVertical: 10,
	},
	userBoxTitle: {
		fontFamily: 'DIN-bold',
		fontSize: 12,
		fontWeight: 'bold',
		color: '$black',
	},
	userInfo: {
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: '$whitesmoke',
		paddingHorizontal: 25,
		justifyContent: 'center',
	},
	userInfoTitle: {
		fontSize: 10,
		color: '$dimgray',
	},
	userInfoAttribute: {
		fontWeight: 'bold',
		marginTop: 5,
	},
	userPwdInput: {
		paddingVertical: 10,
	},
	settingsPhotoBox: {
		width: 70,
		height: 70,
	},
});
