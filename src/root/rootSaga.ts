import {all, fork} from 'redux-saga/effects';

import watchEntities from '../common/sagas/entitiesSaga';
import roomsSaga from '../screens/Rooms/sagas/roomsSaga';

export default function* rootSaga() {
	yield all([
		fork(watchEntities),
		fork(roomsSaga),
	]);
}
