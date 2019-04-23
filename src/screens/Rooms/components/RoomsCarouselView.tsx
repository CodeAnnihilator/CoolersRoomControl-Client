import React from 'react';
import {NavigationComponent} from 'react-navigation';
import {View, Text, TouchableOpacity, ScrollViewProps, Slider} from 'react-native';
import Carousel, {CarouselStatic} from 'react-native-snap-carousel';

import {SCREEN_WIDTH, WINDOW_WIDTH} from '../../../common/constants/constants';

import styles from '../styles/RoomsCarouselViewItem.styles';

import RoomsCarouselViewItem from './RoomsCarouselViewItem';
import LineImage from '../../../assets/line.png';

const TINT_COLOR = '#EDEDED';

interface IState {
	activeSlide: number;
}

interface IProps {
	navigation: NavigationComponent;
	rooms: any;
	temperatureScale: string;
}

export default class RoomsCarouselView extends React.Component<IProps, IState> {

	public state = {
		activeSlide: 0,
	};

	private readonly carousel = React.createRef<Carousel<{}> & ScrollViewProps & CarouselStatic<{}>>();

	private readonly renderItem = ({item}: any) => (
		<RoomsCarouselViewItem
			item={item}
			temperatureScale={this.props.temperatureScale}
		/>
	)

	private readonly onSliderMove = (activeSlide: number) => this.setState({activeSlide},
		() => !!this.carousel.current && this.carousel.current.snapToItem(activeSlide),
	)

	protected onSnapToItem = (activeSlide: number) => this.setState({activeSlide});

	protected roomButton = () => {
		const {navigation, rooms} = this.props;
		const item = rooms.find((_: any, index: number) =>
			!!this.carousel.current && index === this.carousel.current.currentIndex);

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
