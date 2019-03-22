export const getTemperatureAtSystem = (temperature: number, system: string) => {
	if (system === 'fahrenheit') return (temperature * 4.5) + 32;

	return temperature;
};
