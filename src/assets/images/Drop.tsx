import React from 'react';
import Svg, {Path} from 'react-native-svg';

/* tslint:disable */

const Drop: React.FC<any> = ({fill, width, height}) => (
	<Svg width={width} height={height} viewBox='0 0 512 512'>
		<Path fill={fill} d="M438.4,329.6C438.4,430.933,356.267,512,256,512S73.6,430.933,73.6,329.6S256,0,256,0S438.4,229.333,438.4,329.6z"/>
		<Path fill='#EBEEFE' d="M256,464c-73.6,0-134.4-59.733-134.4-134.4c0-8.533,7.467-16,16-16s16,7.467,16,16c0,56.533,45.867,102.4,102.4,102.4c8.533,0,16,7.467,16,16S264.533,464,256,464z"/>
	</Svg>
);

export default Drop;
