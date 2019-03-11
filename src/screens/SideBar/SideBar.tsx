import React from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';

import styles from './sideBarStyles';

class SideBar extends React.Component<any> {
	private readonly navigateToScreen = (route: any) => () => {
		const navigateAction = NavigationActions.navigate({routeName: route});
		this.props.navigation.dispatch(navigateAction);
	}
	public render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<View>
						<Text style={styles.sectionHeadingStyle}>
							Section 1
						</Text>
						<View style={styles.navSectionStyle}>
							<Text style={styles.navItemStyle} onPress={this.navigateToScreen('Rooms')}>
								Page1
							</Text>
						</View>
					</View>
					<View>
						<Text style={styles.sectionHeadingStyle}>
							Section 2
						</Text>
						<View style={styles.navSectionStyle}>
							<Text style={styles.navItemStyle} onPress={this.navigateToScreen('Coolers')}>
								Page2
							</Text>
							<Text style={styles.navItemStyle} onPress={this.navigateToScreen('Scheduler')}>
								Page3
							</Text>
						</View>
					</View>
				</ScrollView>
				<View style={styles.footerContainer}>
					<Text>This is my fixed footer</Text>
				</View>
			</View>
		);
	}
}

export default SideBar;
