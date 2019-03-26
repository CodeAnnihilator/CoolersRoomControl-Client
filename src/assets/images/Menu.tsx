import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

/* tslint:disable */

const Menu: React.FC<any> = ({fill, width = 32, height = 32}) => (
	<Svg width={width} height={height} viewBox='0 0 56 56'>
		<G>
			<Path d='M28,0C12.561,0,0,12.561,0,28s12.561,28,28,28s28-12.561,28-28S43.439,0,28,0z M28,54C13.663,54,2,42.336,2,28
				S13.663,2,28,2s26,11.664,26,26S42.337,54,28,54z'
				fill={fill}
			/>
			<Path
				d='M40,16H16c-0.553,0-1,0.448-1,1s0.447,1,1,1h24c0.553,0,1-0.448,1-1S40.553,16,40,16z'
				fill={fill}
			/>
			<Path
				d='M40,27H16c-0.553,0-1,0.448-1,1s0.447,1,1,1h24c0.553,0,1-0.448,1-1S40.553,27,40,27z'
				fill={fill}
			/>
			<Path
				d='M40,38H16c-0.553,0-1,0.448-1,1s0.447,1,1,1h24c0.553,0,1-0.448,1-1S40.553,38,40,38z'
				fill={fill}
			/>
		</G>
	</Svg>
);

export default Menu;