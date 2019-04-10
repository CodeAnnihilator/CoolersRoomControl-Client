import React from 'react';
import Svg, {Ellipse} from 'react-native-svg';

/* tslint:disable */

const Circle: React.FC<any> = ({
	width=150,
	height=80,
	size=1,
	strokeWidth=5,
	stroke='black',
	style
}) => (
	<Svg height={height * size} width={width * size} style={style}>
		<Ellipse
			cx={width * size / 2}
			cy={height * size / 2}
			rx={width * size / 2 - 10}
			ry={height * size / 2 - 10}
			fill='transparent'
			stroke={stroke}
			strokeWidth={strokeWidth}
		/>
	</Svg>
);

export default Circle;
