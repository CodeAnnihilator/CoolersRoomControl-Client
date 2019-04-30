import {StyleSheet} from 'react-native';
import {AnyObject} from 'react-native-extended-stylesheet';

declare module 'react-native-extended-stylesheet' {
	export function child(styles: AnyObject, type: string, index: number, arrLength: number): AnyObject;
}
