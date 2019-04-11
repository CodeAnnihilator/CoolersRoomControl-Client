import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: '$gray400',
		borderRadius: 5,
		width: 200,
		position: 'absolute',
		top: 40,
		right: 30,
		zIndex: 10,
		backgroundColor: '$white',
	},
	subbox: {
		position: 'relative',
	},
	item: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	itemStripped: {
		borderTopWidth: 1,
		borderColor: '$gray400',
	},
	itemText: {
		fontSize: 16,
		color: '$gray800',
	},
	itemShadowStyle: {
		width: 0,
		height: 5,
	},
});
