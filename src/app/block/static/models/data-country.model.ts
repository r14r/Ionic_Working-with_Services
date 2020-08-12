export class DataCountryModel {
	id: number;
	name: string;
	capital: string;
	area: number;
	population: number;
	currency: string;
	gdp: number;

	constructor(id: number, name: string, capital: string, area: number, population: number, currency: string, gdp: number) {
		this.id = id;
		this.name = name;
		this.capital = capital;
		this.area = area;
		this.population = population;
		this.currency = currency;
		this.gdp = gdp;
	}
}