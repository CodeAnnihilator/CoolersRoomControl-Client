import {takeLatest} from 'redux-saga/effects';

import * as types from '../types/entitiesTypes';

function* incrementValueSaga() {
	yield true;
	console.log('INCREMENT VALUE!');
}

export default function* watchEntities() {
	yield takeLatest(types.INCREMENT_VALUE, incrementValueSaga);
}
