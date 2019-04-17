import React, {PureComponent} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {ICooler, ISelectedCooler} from '../../types/Cooler';

import Power from '../../../../assets/images/Power';

import colors from '../../../../common/constants/colors';

import styles from './bindingCoolersStyles';

interface IProps {
	cooler: ICooler;
	addCoolerToArr: (id: number) => void;
	removeCoolerFromArr: (id: number) => void;
	selectedCoolers: ISelectedCooler[];
}

class BindingCoolerItem extends PureComponent<IProps> {
	protected addCooler = () => {
		const {addCoolerToArr, cooler: {id}} = this.props;

		return addCoolerToArr(id);
	}

	protected removeCooler = () => {
		const {removeCoolerFromArr, cooler: {id}} = this.props;

		return removeCoolerFromArr(id);
	}

	public render() {
		const {cooler, selectedCoolers} = this.props;
		const checkingSelectedCooler = selectedCoolers.find((el: ISelectedCooler) => el.id === cooler.id);

		return (
			<View
				style={styles.container}
				key={cooler.id}
			>
				<View style={styles.powerWrapper}>
					<Power fill={colors['$black']} width={24} height={24} />
					<Text>
						{`${cooler.power} kW`}
					</Text>
				</View>
				<Text style={styles.title}>{cooler.title}</Text>
				<Text style={styles.series}>{cooler.series}</Text>
				{
					!checkingSelectedCooler ? (
						<TouchableOpacity
							onPress={this.addCooler}
							style={[styles.button, styles.bind]}
						>
							<Text style={styles.textButton}>BIND COOLER</Text>
						</TouchableOpacity>)
					: (
						<TouchableOpacity
							onPress={this.removeCooler}
							style={[styles.button, styles.cancel]}
						>
							<Text style={styles.textButton}>CANCEL</Text>
						</TouchableOpacity>)
				}
			</View>
		);
	}
}

export default BindingCoolerItem;
