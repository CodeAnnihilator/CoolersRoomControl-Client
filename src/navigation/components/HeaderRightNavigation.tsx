import React from 'react';
import {NavigationComponent} from 'react-navigation';
import {TouchableOpacity} from 'react-native';

import KebabMenu from '../../assets/images/KebabMenu';
import Plus from '../../assets/images/Plus';

import RoomsEditCardKebabContainer from '../../screens/Rooms/containers/RoomsEditCardKebabContainer';

const HeaderRightNavigator = ({navigation}: NavigationComponent) => {
	switch (navigation.state.index) {
		case(1): return (
			<TouchableOpacity onPress={() => navigation.navigate('BindingCooler', {roomID: navigation.getParam('roomID')})}>
				<Plus width={32} height={32} />
			</TouchableOpacity>);
		case(4): return (
			<TouchableOpacity onPress={() => navigation.navigate('RoomCreateEvent', {roomID: navigation.getParam('roomID')})}>
				<Plus width={32} height={32} />
			</TouchableOpacity>);
		default: return (
			<RoomsEditCardKebabContainer navigation={navigation}>
				<KebabMenu width={18} height={18} />
			</RoomsEditCardKebabContainer>);
	}
};

export default HeaderRightNavigator;
