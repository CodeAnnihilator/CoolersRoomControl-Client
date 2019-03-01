import {all, fork} from 'redux-saga/effects';

import watchEntities from '../common/sagas/entitiesSaga';

export default function* rootSaga() {
	yield all([
		fork(watchEntities),
	]);
}
