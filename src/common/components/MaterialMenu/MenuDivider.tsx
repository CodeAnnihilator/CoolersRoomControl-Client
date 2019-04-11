import React from 'react';
import {View} from 'react-native';

import styles from './styles/MenuDivider.styles';

interface IMenuDevider {
	color?: string;
}

const MenuDivider: React.FC<IMenuDevider> = ({color}) => <View style={[styles.divider, {borderBottomColor: color}]} />;

MenuDivider.defaultProps = {
	color: 'rgba(0,0,0,0.12)',
};

export default MenuDivider;
