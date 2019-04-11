import React, {Component, ReactText, ReactNode} from 'react';
import {View, TouchableOpacity} from 'react-native';
import PopoverItem from './PopoverItem';
import Menu from './MaterialMenu';

interface IPopoverProps {
	options: Array<{
		title: ReactText;
		id: ReactText;
		icon: ReactNode;
		isStripped?: boolean;
		isDisabled?: boolean;
		onSelect: (item: any) => void;
	}>;
	style?: object;
}

export default class Popover extends Component<IPopoverProps> {

	public static defaultProps = {
		options: [],
	};

	public menu = React.createRef<Menu>();

	private readonly showMenu = () => this.menu.current!.show();

	private readonly hideMenu = () => this.menu.current!.hide();

	public render() {
		const {options, style, children} = this.props;

		return (
			<View style={style}>
				<Menu
					ref={this.menu}
					button={
						<TouchableOpacity onPress={this.showMenu}>
							{children}
						</TouchableOpacity>
					}
				>
					{options.map(item => (
						<PopoverItem
							key={item.id}
							item={item}
							hideMenu={this.hideMenu}
							showMenu={this.showMenu}
						/>
					))}
				</Menu>
			</View>
		);
	}
}
