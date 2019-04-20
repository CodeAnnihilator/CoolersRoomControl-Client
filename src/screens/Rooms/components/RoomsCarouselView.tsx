import React from 'react';
import {View, Text, TouchableOpacity, Slider} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {SCREEN_WIDTH, WINDOW_WIDTH} from '../../../common/constants/constants';

import styles from '../styles/RoomsCarouselViewItem.styles';

import RoomsCarouselViewItem from './RoomsCarouselViewItem';
import LineImage from '../../../assets/line.png';

const TINT_COLOR = '#EDEDED';

interface IState {
	activeSlide: number;
}

export default class RoomsCarouselView extends React.Component<any, IState> {
	public state = {
		activeSlide: 0,
	};

	private readonly carousel = React.createRef<any>();

	private readonly renderItem = ({item}: any) => (
		<RoomsCarouselViewItem
			item={item}
			temperatureScale={this.props.temperatureScale}
		/>
	)

	private readonly onSliderMove = (activeSlide: number) => this.setState({activeSlide},
		() => this.carousel.current.snapToItem(activeSlide),
	)

	protected onSnapToItem = (activeSlide: number) => this.setState({activeSlide});

	protected roomButton = () => {
		const {navigation, rooms} = this.props;
		const item = rooms.find((_: any, index: number) => index === this.carousel.current.currentIndex);

		navigation.navigate('RoomCard', {roomID: item.id, selectedRoomTitle: item.title});
	}

	public render() {
		const {activeSlide} = this.state;
		const {rooms} = this.props;

		return (
			<View style={styles.parentContainer}>
			<View style={styles.container}>
				<Text style={styles.text}>
					{String(activeSlide + 1)} / {rooms.length}
				</Text>
				<Slider
					step={1}
					maximumValue={rooms.length - 1}
					onValueChange={this.onSliderMove}
					value={activeSlide}
					style={styles.sliderContainer}
					minimumValue={0}
					minimumTrackTintColor={TINT_COLOR}
					maximumTrackTintColor={TINT_COLOR}
					thumbImage={LineImage}
				/>
			</View>
				<Carousel
					ref={this.carousel}
					data={rooms}
					renderItem={this.renderItem}
					sliderWidth={WINDOW_WIDTH}
					itemWidth={SCREEN_WIDTH - 125}
					inactiveSlideOpacity={0.25}
					removeClippedSubviews
					layoutCardOffset={18}
					loop
					onSnapToItem={this.onSnapToItem}
				/>
				<TouchableOpacity style={styles.roomButton} onPress={this.roomButton}>
					<Text style={styles.buttonTitle}>
						ENTER ROOM
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
