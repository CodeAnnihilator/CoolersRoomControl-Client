import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './rootReducer';

const enhancer = composeWithDevTools();

export default function configureStore(initialState: any) {
	const store = createStore(reducer, initialState, enhancer);
	if ((module as any).hot) {
		(module as any).hot.accept(() => {
			store.replaceReducer(require('./rootReducer').default);
		});
	}

	return store;
}
