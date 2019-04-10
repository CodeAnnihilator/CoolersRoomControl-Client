import React, {PureComponent} from 'react';

import {Field} from 'redux-form';
import {LinearGradient} from 'expo';
import {KeyboardAvoidingView, Image, Text, View, Button, Animated, Easing} from 'react-native';

import AuthInput from './AuthInput';

import validationRules from '../validation/validation';

import Circle from 'assets/images/Circle';

import styles from './auth.styles';
import { createAttendeeAsync } from 'expo/build/Calendar';

class Logo extends PureComponent<any> {
	public state = {
		circle1: new Animated.Value(25),
		circle2: new Animated.Value(50),
		circle3: new Animated.Value(75),
	};

	public componentDidMount() {
		const {circle1, circle2, circle3} = this.state;
		Animated.parallel([
			Animated.timing(circle1, {
				toValue: 0,
			}),
			Animated.timing(circle2, {
				toValue: 50,
			}),
			Animated.timing(circle3, {
				toValue: 100,
				duration: 500,
      			easing: Easing.linear,
			}),
		]).start();
	}

	public render() {
		const {circle1, circle2, circle3} = this.state;

		return (
			<View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				<Animated.View style={{position: 'absolute', top: circle1}}>
					<Circle stroke='#45EBFF' />
				</Animated.View>
				<Animated.View style={{position: 'absolute', top: circle2, opacity: 0.69}}>
					<Circle
						size={0.8}
						stroke='#45EBFF'
					/>
				</Animated.View>
				<Animated.View style={{position: 'absolute', top: circle3, opacity: 0.51}}>
					<Circle
						size={0.5}
						stroke='#45EBFF'
					/>
				</Animated.View>
			</View>
		);
	}
}

const Auth: React.FC<any> = ({navigation: {navigate}, valid}) => (
	<KeyboardAvoidingView style={styles.wrapper} behavior='padding' enabled>
		<LinearGradient
			colors={['#2E526F', '#504A89']}
			style={styles.gradient}
		>
			<Logo />
		</LinearGradient>
	</KeyboardAvoidingView>
);

export default Auth;
