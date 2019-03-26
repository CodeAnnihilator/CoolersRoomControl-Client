import React from 'react';
import Svg, {Path} from 'react-native-svg';

/* tslint:disable */

const Clock: React.FC<any> = ({fill}) => (
	<Svg width={24} height={24} viewBox='0 0 512 512'>
		<Path fill={fill} d='m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469s-132.667969 26.628906-181.019531 74.980469c-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531s26.628906 132.667969 74.980469 181.019531c48.351562 48.351563 112.640625 74.980469 181.019531 74.980469s132.667969-26.628906 181.019531-74.980469c48.351563-48.351562 74.980469-112.640625 74.980469-181.019531s-26.628906-132.667969-74.980469-181.019531zm-181.019531 407.019531c-124.617188 0-226-101.382812-226-226s101.382812-226 226-226 226 101.382812 226 226-101.382812 226-226 226zm0 0'/>
		<Path fill={fill} d='m256 63.058594c-106.386719 0-192.941406 86.554687-192.941406 192.941406s86.554687 192.941406 192.941406 192.941406 192.941406-86.554687 192.941406-192.941406-86.554687-192.941406-192.941406-192.941406zm162.242188 207.941406c-3.089844 33.683594-16.464844 64.433594-36.964844 89.066406l-19.210938-19.214844-21.214844 21.214844 19.214844 19.214844c-24.632812 20.496094-55.382812 33.875-89.066406 36.960938v-27.242188h-30v27.242188c-33.683594-3.089844-64.433594-16.464844-89.066406-36.964844l19.210937-19.210938-21.210937-21.214844-19.214844 19.214844c-20.496094-24.632812-33.871094-55.382812-36.960938-89.066406h27.242188v-30h-27.242188c3.089844-33.683594 16.464844-64.433594 36.964844-89.066406l19.210938 19.214844 21.214844-21.214844-19.214844-19.214844c24.632812-20.496094 55.382812-33.875 89.066406-36.960938v27.242188h30v-27.242188c33.683594 3.089844 64.433594 16.464844 89.066406 36.964844l-19.210937 19.210938 21.210937 21.214844 19.214844-19.214844c20.496094 24.632812 33.875 55.382812 36.964844 89.066406h-27.246094v30zm0 0'/>
		<Path fill={fill} d='m271 152.332031h-30v119.363281l58.777344 66.257813 22.445312-19.90625-51.222656-57.742187zm0 0'/>
	</Svg>
);

export default Clock;