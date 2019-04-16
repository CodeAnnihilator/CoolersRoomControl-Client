import React from 'react';
import {View, Text, Image} from 'react-native';
import Thermometer from '../../../assets/images/Thermometer';
import Drop from '../../../assets/images/Drop';
import {getTemperatureAtSystem} from '../../../utils/temperatureAtSystem';
import {SCREEN_WIDTH} from '../../../common/constants/constants';
import styles from '../styles/RoomsCarouselViewItem.styles';

const RoomsCarouselViewItem: React.FC<any> = ({item, temperatureScale}) => (
	<View style={styles.viewItemContainer}>
		<Text style={styles.title} >
			{item.title}
		</Text>
		<View style={styles.titleBox}>
			<View
				style={styles.icon}
			>
				<Thermometer width={24} height={24} />
				<Text style={styles.iconTitle}>
					+ {getTemperatureAtSystem(item.temperature, temperatureScale)}
				</Text>
			</View>
			<View style={styles.icon} >
				<Drop width={24} height={24} />
				<Text style={styles.iconTitle}>
					{item.humidity} %
				</Text>
			</View>
		</View>
		<Image
			style={{width: SCREEN_WIDTH - 110, height: SCREEN_WIDTH - 100}}
			// source={{uri: item.images[0]}} we enable this when we get a actual pictures from api.
			source={{uri: 'https://picsum.photos/400/400/?random'}}
		/>
		<Text
			style={styles.description}
		>
			{item.description}
		</Text>
	</View>
);

export default RoomsCarouselViewItem;
