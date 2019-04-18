import uniqueID from 'lodash.uniqueid';
import React, {PureComponent} from 'react';
import {ImagePicker, Permissions} from 'expo';
import {View, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';

import PhotoCamera from '../../assets/images/PhotoCamera';

const styles = StyleSheet.create({
	avatarBox: {
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	imageBox: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
});

export default class ImagePickerWrapper extends PureComponent<any> {
	//tslint:disable-next-line
	readonly defaultImageB64 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8SEhUPDw8VFRUVFRUVFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0NDisZFRkrKysrKysrLSsrKysrLSsrKysrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQcC/8QAGBABAQEBAQAAAAAAAAAAAAAAAAERIQL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANAKLURAKALEAwVIALUgAVQSGCggsSgUVAKLUABYCAoIEWggFAUARdQACgAAAAAAAAAEAVAAKAqAAsQABAVUAAoBgoCLYighQBUWICpABakVAFxFBAUCJRQQAFsRUAVFgIogEWooJCgCidAALAKQKALEBFCAFKAAuAhCAAQwEqgAUsAICgiKABCgUABQBFQACgLEAAAFqBQKqACoARagAFAVAoCxABUNAWoAFKAaKAhRaCAtBBYgGCpABakACqCGCgkFhQQVAKKkAFICGFUEgRaCAUFDQEAAIGAAABgAAAAAAAAAFAClAAAAAAAAAAUEWoughQBYgAqQAWpDQCqigioAsSkUBABai6gCxFgIqAEWooIUAUTAAFsBKBQBUAFSABSAAuAhAACFAoqAC1AAqgiKoIEKBQKCgAioABSAsQABFBUCgVUAAAFqAAlUFQKAsQBUEBVQACgHQACwUEKAKixACBAKLUAXEqgkAAgsKCAAYKgCosBDAAKLQQCgomgAFAoAAAAYAAAAABDAAgAAAUoAAAaGABACgAoAItQAKUBYlAFSAC1IAFVABUICwqAKgAtSGlBaRACqgBFqGgqUAXRMAAWggFAFiACpACrUgAVQQFBBYlAoqAUWpAAqwECqCBFoIBQBQEUAQqgESgCxIALUAD0qgOaACwoAkABUoAtPIAigCKAJCgAAI//Z'

	private readonly askPermissions = async () => {
		await Permissions.askAsync(Permissions.CAMERA);
		await Permissions.askAsync(Permissions.CAMERA_ROLL);
	}

	private readonly pickImage = async () => {
		await this.askPermissions();

		const result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			aspect: [4, 3],
		}) as any;

		if (!result.cancelled) {
			this.props.onChange('temporaryImages', (fieldValue: any) => fieldValue
				? ([...fieldValue, {id: uniqueID(), image: result.uri}])
				: [{id: uniqueID(), image: result.uri}],
			);
		}
	}

	public render() {
		const {uri} = this.props;

		return (
			<View>
				<TouchableOpacity
					onPress={this.pickImage}
				>
					<ImageBackground
						source={{uri: uri || this.defaultImageB64}}
						style={styles.avatarBox}
						imageStyle={styles.imageBox}
					>
						<PhotoCamera />
					</ImageBackground>
				</TouchableOpacity>
			</View>
		);
	}
}
