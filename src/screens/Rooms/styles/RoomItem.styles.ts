import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	roomImage: {
		width: 90,
		height: 90,
	},
	roomBox: {
		alignItems: 'flex-start',
		justifyContent: 'center',
		marginLeft: 12,
	},
	roomBoxTitle: {
		padding: 8,
		fontSize: 15,
		fontFamily: 'DIN-bold',
	},
	roomBoxInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 8,
		width: 120,
	},
	roomBoxRoomButton: {
		width: 120,
	},
	roomBoxParams: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 20,
	},
	roomBoxParamsTitle: {
		fontSize: 12,
	},
	roomBoxContainer: {
		width: '100%',
		padding: 20,
		borderBottomWidth: 1,
		borderColor: '$whitesmoke',
		flexDirection: 'row',
		alignItems: 'center',
		height: 125,
	},
	roomBoxContent: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});
