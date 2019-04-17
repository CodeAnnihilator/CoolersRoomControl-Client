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
