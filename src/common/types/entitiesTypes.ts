export const INCREMENT_VALUE = 'ENTITIES/INCREMENT_VALUE';

export interface ICooler {
	id: number;
	power: string;
	title: string;
	series: string;
	status: string;
	roomID: number | null;
	place: string;
	source: string;
	type: string;
	certification: string;
	cop: string;
}

export interface ISelectedCooler {
	id: number;
}

export interface INotification {
	id: number;
	type: string;
	date: string;
	timeFrom: string;
	timeTo: string;
	dateFrom?: string;
	dateTo?: string;
	operation?: string;
	temperature?: number;
	humidity?: number;
	weekly?: string;
	description?: string;
	message?: string;
	model?: string;
	serial?: string;
	roomID: number;
	alert?: string;
	title?: string;
}
