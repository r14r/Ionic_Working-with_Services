import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { DataCountryModel } from '../../models/data-country.model';
import { DATA } from './data-contries';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private http: Http) {
	}

	getCountries(): DataCountryModel[] {
		return DATA;
	}

	getPopulatedCountries(): DataCountryModel[] {
		return DATA.sort((a, b) => b.population - a.population).slice(0, 3);
	}

	getLargestCountries(): DataCountryModel[] {
		return DATA.sort((a, b) => b.area - a.area).slice(0, 3);
	}

	getGDPCountries(): DataCountryModel[] {
		return DATA.sort((a, b) => b.gdp - a.gdp).slice(0, 3);
	}

	getCountry(name: string): DataCountryModel {
		return DATA.find((country) => country.name === name);
	}
}
