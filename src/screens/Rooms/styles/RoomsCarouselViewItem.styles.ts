import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 20,
		flexDirection: 'row',
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		fontStyle: 'normal',
		color: '$black',
		marginVertical: 20,
	},
	titleBox: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
		width: 180,
	},
	iconTitle: {
		fontSize: 16,
	},
	description: {
		marginVertical: 20,
	},
	dotsStyle: {
		width: 5,
		height: 5,
		borderRadius: 5,
		marginHorizontal: 5,
		padding: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.92)',
	},
	roomButton: {
		height: 60,
		width: '100%',
		backgroundColor: '#4B99FC',
		alignItems: 'center',
		justifyContent: 'center',
	},
	viewItemContainer: {
		alignItems: 'center',
		flex: 1,
	},
	buttonTitle: {
		color: '$white',
	},
});
