import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	editRoomItem: {
		height: 90,
		paddingVertical: 15,
		paddingHorizontal: 25,
		borderBottomColor: '$gray200',
		borderBottomWidth: 1,
	},
	editRoomItemTitle: {
		fontSize: 12,
		color: '$dimgray',
	},
	editRoomItemContent: {
		fontSize: 14,
		marginTop: 10,
		fontWeight: 'bold',
		color: '$black',
	},
	addImageContainer: {
		alignItems: 'center',
		marginTop: 30,
	},
	addImageContainerTitle: {
		marginVertical: 10,
	},
	imagesGallery: {
		padding: 20,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	imagesGalleryImage: {
		paddingHorizontal: 15,
	},
});
