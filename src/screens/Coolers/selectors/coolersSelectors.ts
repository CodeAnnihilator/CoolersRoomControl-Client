import {createSelector} from 'reselect';

export const getCoolers = (state: any) => state.entities.coolers;

export const getCoolerByID = createSelector(
	getCoolers,
	(_: any, id: string) => id,
	(coolers, id) => coolers.find((el: any) => el.id === id),
);
