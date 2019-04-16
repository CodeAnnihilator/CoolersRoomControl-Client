import React from 'react';
import RoomsCarouselViewContainer from '../containers/RoomsCarouselViewContainer';
import RoomsListViewContainer from '../containers/RoomsListViewContainer';

interface IState {
	orientation: string;
}

export default class Rooms extends React.Component<any, IState> {
	public componentDidMount() {
		this.props.navigation.setParams({
			changeOrientation: this.changeOrientation,
		});
	}

	protected changeOrientation = () => this.setState(prevState => ({
		orientation: prevState.orientation === 'carousel' ? 'list' : 'carousel',
	}))

	public state = {
		orientation: 'carousel',
	};

	public render() {
		return this.state.orientation === 'carousel'
			? <RoomsCarouselViewContainer {...this.props} />
			: <RoomsListViewContainer {...this.props} />;
	}
}
