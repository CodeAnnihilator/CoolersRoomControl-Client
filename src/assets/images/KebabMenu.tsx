import React from 'react';
import Svg, {Circle, G} from 'react-native-svg';

/* tslint:disable */

const KebabMenu: React.FC<any> = ({fill, width = 32, height = 32}) => (
	<Svg width={width} height={height} viewBox='0 0 512 512'>
		<G>
			<G>
				<Circle fill={fill} cx="256" cy="256" r="64"/>
				<Circle fill={fill} cx="256" cy="448" r="64"/>
				<Circle fill={fill} cx="256" cy="64" r="64"/>
			</G>
		</G>
	</Svg>
);

export default KebabMenu;