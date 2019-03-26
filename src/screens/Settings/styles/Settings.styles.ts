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
		borderBottomColor: '#f3f3f3',
		paddingVertical: 20,
		width: '100%',
	},
	userAvatarBox: {
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#f3f3f3',
		paddingVertical: 10,
	},
	userBoxTitle: {
		// fontFamily: 'DIN',
		fontSize: 12,
		fontWeight: 'bold',
		color: '#000000',
	},
	userInfo: {
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: '#f3f3f3',
		paddingHorizontal: 25,
		justifyContent: 'center',
	},
	userInfoTitle: {
		fontSize: 10,
		color: '#505050',
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
