import React from 'react';
import {ScrollView, View, RefreshControl} from 'react-native';

// import styles from '../styles/Rooms.styles';

import RoomItemContainer from '../containers/RoomItemContainer';

export default class Rooms extends React.Component<any> {
	public state = {
		refreshing: false,
	};

	private readonly onRefresh = () => {
		this.setState({refreshing: true});

		new Promise(res => {
			setTimeout(() => res(), 2000);
		}).then(() => {
			this.setState({refreshing: false});
		});
	}

	public render() {

		return (
			<View>
				<ScrollView
					refreshControl={
						<RefreshControl
							refreshing={this.state.refreshing}
							onRefresh={this.onRefresh}
						/>
					}
				>
					{
						this.props.rooms.map(({id}: {id: string}) => (
							<RoomItemContainer
								key={id}
								id={id}
							/>
						))
					}
				</ScrollView>
			</View>
		);
	}
}
