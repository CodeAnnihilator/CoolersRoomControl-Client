import React from 'react';
import Svg, {Path} from 'react-native-svg';

/* tslint:disable */

const directions = {
	left: 270,
	right: 90,
	up: 0,
	down: 180,
}

interface IArrow {
	fill?: string,
	width?: number | string,
	height?: number | string,
	direction?: string,
}

const Arrow: React.FC<IArrow> = ({fill, width, height, direction}) => (
	<Svg
		width={width}
		height={height}
		viewBox="0 0 31.479 31.479"
		style={{transform: [{ rotate: `${directions[direction]}deg`}]}}
	>
		<Path
			fill={fill}
			d="M26.477,10.274c0.444,0.444,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-8.047-8.047
			v26.555c0,0.619-0.492,1.111-1.111,1.111c-0.619,0-1.127-0.492-1.127-1.111V3.813l-8.031,8.047c-0.444,0.429-1.159,0.429-1.587,0
			c-0.444-0.444-0.444-1.143,0-1.587l9.952-9.952c0.429-0.429,1.143-0.429,1.571,0L26.477,10.274z"
		/>
	</Svg>
);

Arrow.defaultProps = {
	direction: 'up',
	width: 18,
	height: 18,
	fill: '#000',
}

export default Arrow;
