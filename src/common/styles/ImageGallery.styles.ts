import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		height: 50,
		marginHorizontal: 10,
	},
	miniImageContainer: {
		width: 50,
		height: 50,
	},
	imagesCollection: {
		height: 60,
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
		position: 'absolute',
		bottom: 50,
		alignItems: 'center',
	},
	selectedImage: {
		borderWidth: 5,
		borderColor: '$white',
		height: 60,
	},
	imageContainer: {
		width: '100%',
		height: '100%',
		position: 'relative',
	},
});
