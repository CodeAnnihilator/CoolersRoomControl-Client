import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {Field} from 'redux-form';

import ReduxFormInput from '../reduxForm/reduxFormInput';

import EditTemperature from './EditTemperature';
import EditDate from './EditDate';

import ControlArrow from '../../../assets/images/ControlArrow';

import styles from './editEventStyles';

const EditEvent: React.FC = () => (
	<ScrollView>
		<View style={styles.indicatorWrapper}>
			<Text>Temperature</Text>
			<Field name='temperature' component={EditTemperature} indicators='C' />
		</View>
		<View style={styles.indicatorWrapper}>
			<Text>Humidity</Text>
			<Field name='humidity' component={EditTemperature} indicators='%' />
		</View>
		<View style={styles.descriptionWrapper}>
			<Text>Title</Text>
			<Field name='title' component={ReduxFormInput} style={styles.input} />
		</View>
		<View style={styles.descriptionWrapper}>
			<Text>Description</Text>
			<Field name='description' component={ReduxFormInput} multiline style={styles.input} />
		</View>
		<View style={styles.dateWrapper}>
			<View style={styles.dayWrapper}>
				<Text>From</Text>
				<View style={styles.dropdownWrapper}>
					<Field name='dateFrom' component={EditDate} style={styles.input} />
					<ControlArrow width={12} height={12} direction='down' />
				</View>
			</View>
			<View style={styles.timeWrapper}>
				<View style={styles.dropdownWrapper}>
					<Field name='timeFrom' component={ReduxFormInput} style={styles.input} />
					<ControlArrow width={12} height={12} direction='down' />
				</View>
			</View>
		</View>
		<View style={styles.dateWrapper}>
			<View style={styles.dayWrapper}>
				<Text>To</Text>
				<View style={styles.dropdownWrapper}>
					<Field name='dateTo' component={EditDate} style={styles.input} />
					<ControlArrow width={12} height={12} direction='down' />
				</View>
			</View>
			<View style={styles.timeWrapper}>
				<View style={styles.dropdownWrapper}>
					<Field name='timeTo' component={ReduxFormInput} style={styles.input} />
					<ControlArrow width={12} height={12} direction='down' />
				</View>
			</View>
		</View>
		<View style={styles.descriptionWrapper}>
			<Text>Repeat</Text>
			<View style={styles.dropdownWrapper}>
				<Field name='weekly' component={ReduxFormInput} style={styles.input} />
				<ControlArrow width={12} height={12} direction='down' />
			</View>
		</View>
		<View style={styles.descriptionWrapper}>
			<Text>Alert</Text>
			<View style={styles.dropdownWrapper}>
				<Field name='alert' component={ReduxFormInput} style={styles.input} />
				<ControlArrow width={12} height={12} direction='down' />
			</View>
		</View>
	</ScrollView>
);

export default EditEvent;
