export class DataModel {
	name: string;
	topLevelDomain: string[];
	alpha2Code: string;
	alpha3Code: string;
	callingCodes: number[];
	capital: string;
	altSpellings: string[];
	region: string;
	subregion: string;
	population: string;
	latlng: [number, number];
	demonym: string;
	area: string;
	gini: string;
	timezones: [string];
	borders: [string];
	nativeName: string;
	numericCode: string;
	currencies: [
		{
			code: string;
			name: string;
			symbol: string;
		}
	];
	languages: [
		{
			iso639_1: string;
			iso639_2: string;
			name: string;
			nativeName: string;
		}
	];
	translations: {
		de: string;
		es: string;
		fr: string;
		ja: string;
		it: string;
		br: string;
		pt: string;
	};
	flag: string;
	regionalBlocs: [
		{
			acronym: string;
			name: string;
			otherAcronyms: [string];
			otherNames: [string];
		},
		{
			acronym: string;
			name: string;
			otherAcronyms: [string];
			otherNames: [string];
		}
	];
	cioc: string;

	constructor(name: string, alpha2Code: string = '') {
		this.name = name;
		this.alpha2Code = alpha2Code;
	}
}
