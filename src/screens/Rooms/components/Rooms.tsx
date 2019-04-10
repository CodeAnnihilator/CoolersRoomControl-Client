import React from 'react';
import {Linking, WebBrowser} from 'expo';
import {ScrollView, View, Text, AsyncStorage} from 'react-native';

import RoomItemContainer from '../containers/RoomItemContainer';

export default class Rooms extends React.Component<any> {
	private readonly handleOAuthLogin = async () => {
		const redirectUrl = await Linking.getInitialURL();
		const authUrl = 'https://coolers.localtunnel.me/api/auth/google';

		this.addLinkingListener();

		await WebBrowser.openAuthSessionAsync(authUrl, redirectUrl)
			.then((token: any) => AsyncStorage.setItem('token', token));

		this.removeLinkingListener();
	}

	private readonly handleRedirect = () => WebBrowser.dismissBrowser();
	private readonly addLinkingListener = () => Linking.addEventListener('url', this.handleRedirect);
	private readonly removeLinkingListener = () => Linking.removeEventListener('url', this.handleRedirect);

	public render() {

		return (
			<View>
				<Text onPress={this.handleOAuthLogin}>AUTHENTICATE</Text>
				<View>
					<ScrollView>
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
			</View>
		);
	}
}
