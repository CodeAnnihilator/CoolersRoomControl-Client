import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	parentContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	sliderContainer: {
		width: 200,
		height: 40,
	},
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
	text: {
		paddingTop: 20,
		fontSize: 18,
		fontFamily: 'DIN-bold',
		alignSelf: 'flex-start',
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
