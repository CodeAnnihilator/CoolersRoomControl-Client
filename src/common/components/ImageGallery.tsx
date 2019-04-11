import React, {PureComponent} from 'react';
import cn from 'react-native-classnames';
import {SafeAreaView, ImageBackground, ScrollView, View, Image, TouchableOpacity} from 'react-native';

import styles from '../styles/ImageGallery.styles';
import {IMAGE_STEP_AT_GALLERY} from '../constants/constants';

interface IImageGallery {
	images: string[];
	choosenImage: string;
	chooseItemAtGallery: (roomID: string, image: string) => void;
	roomID: string;
}

export default class ImageGallery extends PureComponent<IImageGallery> {
	constructor(props: IImageGallery) {
		super(props);
	}

	private readonly imagesRef = React.createRef<ScrollView>();

	public componentDidMount() {
		const {images, choosenImage} = this.props;

		this.imagesRef.current!.scrollTo({
			x: images.findIndex(item => item === choosenImage) * IMAGE_STEP_AT_GALLERY,
		});
	}

	public render() {
		const {images, choosenImage, chooseItemAtGallery, roomID} = this.props;

		return (
			<SafeAreaView style={styles.container}>
				<ImageBackground
					source={{uri: choosenImage}}
					style={styles.imageContainer}
				>
					<ScrollView
						horizontal
						contentContainerStyle={styles.imagesCollection}
						ref={this.imagesRef}
					>
						{images.map((item, index) => (
							<TouchableOpacity
								onPress={() => chooseItemAtGallery(roomID, item)}
								key={index}
							>
								<View style={cn(styles, 'image', {['selectedImage']: item === choosenImage})}>
									<Image
										style={styles.miniImageContainer}
										source={{uri: item}}
									/>
								</View>
							</TouchableOpacity>
						))}
					</ScrollView>
				</ImageBackground>
			</SafeAreaView>
		);
	}
}
