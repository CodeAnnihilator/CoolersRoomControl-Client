import {put, select, takeLatest} from 'redux-saga/effects';

import {ICooler, ISelectedCooler} from '../../../common/types/entitiesTypes';

import {SAVE_COOLERS} from '../constants/roomsConstants';

import {bindCoolers} from '../actions/roomsActions';

import {getCoolers} from '../../../common/selectors/entitiesSelectors';

function* bindCoolersSaga(action: any) {
	const {coolers, roomID} = action.payload;
	const allCoolers = yield select((state: any) => getCoolers(state));

	if (coolers && coolers.length) {
		const newCoolersArr = allCoolers.map((cooler: ICooler) => {
			if (coolers.some((item: ISelectedCooler) => item.id === cooler.id)) cooler.roomID = roomID;

			return {...cooler};
		});

		yield put(bindCoolers(newCoolersArr));
	}
}

export default function* roomsSaga() {
	yield takeLatest(SAVE_COOLERS, bindCoolersSaga);
}
