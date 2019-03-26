import {StyleSheet} from 'react-native';

export default StyleSheet.create({
	notification_outer: {
		position: 'absolute',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 12,
		height: 12,
		borderRadius: 6,
		zIndex: 1,
		right: -3,
		bottom: -3,
		backgroundColor: '#F4F4F4',
	},
	notification_inner: {
		position: 'relative',
		width: 8,
		height: 8,
		borderRadius: 4,
		backgroundColor: 'red',
	},
});
