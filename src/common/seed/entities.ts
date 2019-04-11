export const arrCoolers = [{
	id: 1,
	power: '210',
	title: 'PIONEER KFR20KW/KOR20KW',
	series: 'c8728d04-0552-4cd2-bd39-ae93976d728e',
	status: 'active',
	room: 'No Room',
	place: 'Jiangsu, China (Mainland)',
	source: 'Electrical',
	type: 'AC Air Conditioner',
	certification: 'CE, RoHS, CCC',
	cop: 'Optional',
}, {
	id: 2,
	power: '110',
	title: 'GREEN GRI/GRO-09HH 2',
	series: '102044ea-2a64-4afe-afb1-07ee97f5455f',
	status: 'off',
	room: '2',
	place: 'Jiangsu, China (Mainland)',
	source: 'Electrical',
	type: 'AC Air Conditioner',
	certification: 'CE, RoHS, CCC',
	cop: 'Optional',
}, {
	id: 3,
	power: '342',
	title: '§ ASI-09HS4/ASO-09HS4',
	series: 'ad76aaa0-838f-4f0c-b94e-8c0d1d2e41eb',
	status: 'crashed',
	room: 'No Room',
	place: 'Jiangsu, China (Mainland)',
	source: 'Electrical',
	type: 'AC Air Conditioner',
	certification: 'CE, RoHS, CCC',
	cop: 'Optional',
}, {
	id: 4,
	power: '210',
	title: 'PIONEER KFR20KW/KOR20KW',
	series: 'c8728d04-0552-4cd2-bd39-ae93976d728e',
	status: 'active',
	room: '2',
	place: 'Jiangsu, China (Mainland)',
	source: 'Electrical',
	type: 'AC Air Conditioner',
	certification: 'CE, RoHS, CCC',
	cop: 'Optional',
}, {
	id: 5,
	power: '110',
	title: 'GREEN GRI/GRO-09HH 2',
	series: '102044ea-2a64-4afe-afb1-07ee97f5455f',
	status: 'off',
	room: '3',
	place: 'Jiangsu, China (Mainland)',
	source: 'Electrical',
	type: 'AC Air Conditioner',
	certification: 'CE, RoHS, CCC',
	cop: 'Optional',
}, {
	id: 6,
	power: '342',
	title: '§ ASI-09HS4/ASO-09HS4',
	series: 'ad76aaa0-838f-4f0c-b94e-8c0d1d2e41eb',
	status: 'crashed',
	room: '4',
	place: 'Jiangsu, China (Mainland)',
	source: 'Electrical',
	type: 'AC Air Conditioner',
	certification: 'CE, RoHS, CCC',
	cop: 'Optional',
}];

const date = [
	'Mar 12 2019 04:00:00 PM',
	'Mar 11 2019 10:00:00 AM',
	'Mar 10 2019 10:00:00 AM',
	'Mar 08 2019 11:00:00 AM',
	'Mar 07 2019 09:00:00 AM',
	'Apr 12 2019 09:00:00 AM',
];
const time = ['9:00PM', '04:00PM - 06:10PM', '04:00PM', '02:10PM', '05:00PM'];
const operation = ['Manually', 'Scheduled'];
const temperature = ['+25 C', '+21 C', '+23 C', '+27 C', '+30 C'];
const humidity = ['30%', '45%', '50%', '63%', '20%'];
const weekly = [true, false];
const description = [
	'This is our first meeti in this room, so we will occupy it for a while.',
	null,
];

const generateData = (name: any) => {
	const randomData = name[Math.round(Math.random() * (name.length - 1))];

	return randomData;
};

const generateServicesNotification = (index: number) => ({
	id: index,
	type: 'servicesNotification',
	date: generateData(date),
	time: generateData(time),
	message: 'Added new Cooler in the Room',
	model: 'ASI-09HS4/ASO-09HS4',
	serial: 'ad76aaa0-838f-4f0c-b94e-8c0d1d2e41eb',
	roomId: index + 1,
});

const generateNotification = (index: number) => ({
	id: index,
	type: 'notification',
	date: generateData(date),
	time: generateData(time),
	operation: generateData(operation),
	temperature: generateData(temperature),
	humidity: generateData(humidity),
	weekly: generateData(weekly),
	description: generateData(description),
	roomId: index + 1,
});

const setTypeNotifications = (index: number) => {
	if (Math.round(Math.random())) return generateNotification(index);

	return generateServicesNotification(index);
};

export const generateNotifications = (length: number) => (
	Array.from({length},
		(_, index) => setTypeNotifications(index),
	)
);

export const generateNotificationsByRoom = (length: number) => (
	Array.from({length},
		(_, index) => (
			{
				id: index,
				data: [setTypeNotifications(index)],
			}
		),
	)
);
