import React from 'react';
import Svg, {Ellipse, G} from 'react-native-svg';

/* tslint:disable */

interface IProps {
	fill?: string;
	width?: number;
	height?: number;
}

const KebabMenu: React.FC<IProps> = ({fill, width = 32, height = 32}) => (
	<Svg width={width} height={height} viewBox='0 0 512 512'>
		<G>
			<Ellipse fill={fill} x="256" y="256" rx="64" ry="64"/>
			<Ellipse fill={fill} x="256" y="448" rx="64" ry="64"/>
			<Ellipse fill={fill} x="256" y="64" rx="64" ry="64"/>
		</G>
	</Svg>
);

export default KebabMenu;