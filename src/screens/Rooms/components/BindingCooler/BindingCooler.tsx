import React, {Component} from 'react';
import {NavigationComponent} from 'react-navigation';
import {ScrollView} from 'react-native';

import {ICooler, ISelectedCooler} from '../../../../common/types/entitiesTypes';

import BindingCoolerItem from './BindingCoolerItem';

interface IState {
	selectedCoolers: ISelectedCooler[];
}

interface IProps {
	coolers: ICooler[];
	navigation: NavigationComponent;
}

class BindingCoolers extends Component<IProps, IState> {
	public state = {
		selectedCoolers: [],
	};

	protected addCoolerToArr = (id: number) => {
		const {selectedCoolers} = this.state;

		this.setState({selectedCoolers: [...selectedCoolers, {id}]},
			() => this.props.navigation.setParams({
				coolers: this.state.selectedCoolers,
			}));
	}

	protected removeCoolerFromArr = (id: number) => {
		const {selectedCoolers} = this.state;
		const removedCooler = selectedCoolers.filter((el: ICooler) => el.id !== id);

		this.setState({selectedCoolers: removedCooler},
			() => this.props.navigation.setParams({
				coolers: this.state.selectedCoolers,
			}));
	}

	public render() {
		const {coolers} = this.props;
		const {selectedCoolers} = this.state;

		return (
			<ScrollView>
				{
					coolers.map((cooler: ICooler) => (
						<BindingCoolerItem
							key={cooler.id}
							cooler={cooler}
							addCoolerToArr={this.addCoolerToArr}
							removeCoolerFromArr={this.removeCoolerFromArr}
							selectedCoolers={selectedCoolers}
						/>
					))
				}
			</ScrollView>
		);
	}
}

export default BindingCoolers;
