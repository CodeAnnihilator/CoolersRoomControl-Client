import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeWithDevTools(
	applyMiddleware(sagaMiddleware),
);

export default function configureStore(initialState: any) {
	const store = createStore(reducer, initialState, enhancer);
	if ((module as any).hot) {
		(module as any).hot.accept(() => {
			store.replaceReducer(require('./rootReducer').default);
		});
	}
	sagaMiddleware.run(rootSaga);

	return store;
}
