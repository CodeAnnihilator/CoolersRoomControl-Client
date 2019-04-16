import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {SCREEN_WIDTH, WINDOW_WIDTH} from '../../../common/constants/constants';

import styles from '../styles/RoomsCarouselViewItem.styles';

import RoomsCarouselViewItem from './RoomsCarouselViewItem';

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

	protected onSnapToItem = (activeSlide: number) => this.setState({activeSlide});

	protected roomButton = () => {
		const {navigation, rooms} = this.props;
		const item = rooms.find((_: any, index: number) => index === this.state.activeSlide);

		navigation.navigate('RoomCard', {roomID: item.id, selectedRoomTitle: item.title});
	}

	public render() {

		return (
			<View style={{alignItems: 'center', justifyContent: 'space-between', flex: 1}}>
				<Pagination
					dotsLength={this.props.rooms.length}
					activeDotIndex={this.state.activeSlide}
					dotStyle={styles.dotsStyle}
					inactiveDotOpacity={0.4}
					inactiveDotScale={0.6}
				/>
				<Carousel
					ref={this.carousel}
					data={this.props.rooms}
					renderItem={this.renderItem}
					sliderWidth={WINDOW_WIDTH}
					itemWidth={SCREEN_WIDTH - 130}
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
