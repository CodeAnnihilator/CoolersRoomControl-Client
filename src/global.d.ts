import {StyleSheet} from 'react-native';
import {AnyObject} from 'react-native-extended-stylesheet';

declare module 'console' {
	export = typeof import('console');
}

declare namespace EStyleSheet {
	export function child(styles: AnyObject, type: string, index: number, arrLength: number): AnyObject;
}

declare module 'react-native-extended-stylesheet' {
	export = EStyleSheet
}
