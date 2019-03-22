import React from 'react';
import Svg, {Path} from 'react-native-svg';

/* tslint:disable */

const RoomBox: React.FC<any> = ({fill, width, height}) => (
	<Svg width={width} height={height} viewBox="0 -13 511.99989 511">
		<Path
			fill={fill}
			d="m352 346.496094c-5.523438 0-10 4.480468-10 10 0 5.519531 4.476562 10 10 10 5.519531 0 10-4.480469 10-10 0-5.519532-4.480469-10-10-10zm0 0"
		/>
		<Path
			d="m266 170.5c0-5.523438-4.480469-10-10-10s-10 4.476562-10 10c0 5.519531 4.480469 10 10 10s10-4.480469 10-10zm0 0"
			fill={fill}
		/>
		<Path
			d="m160 366.496094c5.519531 0 10-4.480469 10-10 0-5.519532-4.480469-10-10-10s-10 4.480468-10 10c0 5.519531 4.480469 10 10 10zm0 0"
			fill={fill}
		/>
		<Path
			d="m506.058594 414.015625-54.0625-24.019531v-219.496094c0-3.960938-2.371094-7.628906-6.140625-9.230469l-179.855469-77.355469v-73.414062c0-5.523438-4.480469-10-10-10-5.523438 0-10 4.476562-10 10v73.414062l-179.855469 77.355469c-3.574219 1.484375-6.140625 5.105469-6.140625 9.230469v219.496094l-54.0625 24.019531c-5.046875 2.246094-7.320312 8.152344-5.078125 13.199219 2.226563 5.015625 8.117188 7.335937 13.199219 5.078125l56.003906-24.882813 181.984375 78.269532c2.40625 1.035156 5.347657 1.097656 7.902344 0l181.980469-78.269532 56.003906 24.882813c5.101562 2.265625 10.980469-.082031 13.199219-5.078125 2.242187-5.046875-.03125-10.953125-5.078125-13.199219zm-260.058594-308.328125v24.8125c0 5.519531 4.476562 10 10 10 5.519531 0 10-4.480469 10-10v-24.8125l150.6875 64.8125-160.6875 69.113281-160.6875-69.113281zm-113.410156 262.996094c-2.246094-5.046875-8.15625-7.316406-13.199219-5.078125l-39.390625 17.503906v-195.425781l166 71.398437v204.226563l-151.035156-64.960938 32.546875-14.460937c5.046875-2.246094 7.320312-8.15625 5.078125-13.203125zm133.410156 92.625v-204.226563l165.996094-71.398437v195.425781l-39.386719-17.5c-5.050781-2.242187-10.957031.027344-13.199219 5.078125-2.242187 5.046875.03125 10.953125 5.078125 13.199219l32.546875 14.460937zm0 0"
			fill={fill}
		/>
	</Svg>
);

export default RoomBox;
