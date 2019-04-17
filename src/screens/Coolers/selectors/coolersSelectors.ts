import {createSelector} from 'reselect';

import {getCoolers} from '../../../common/selectors/entitiesSelectors';

export const getCoolerByID = createSelector(
	getCoolers,
	(_: any, id: string) => id,
	(coolers, id) => coolers.find((el: any) => el.id === id),
);
