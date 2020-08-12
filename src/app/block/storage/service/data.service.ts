
import { DataItem } from '../model/data.model';
import { StorageService } from './storage.service';

import { Toolbox } from 'src/app/helpers/toolbox';

//
const STORAGE_KEY = 'data';

class DataService {
	toolbox = new Toolbox('DataService');

	constructor(private storage: StorageService) {

	}
	async addDataItem(dataItem: DataItem): Promise<void> {
		const dataItems = (await this.storage.get(STORAGE_KEY)) || [];
		dataItems.push(dataItem);

		await this.storage.set(STORAGE_KEY, dataItems);
	}

	async removeDataItem(holding): Promise<void> {
		const dataItem = await this.storage.get('dataItem');
		dataItem.splice(dataItem.indexOf(holding), 1);

		await this.storage.set(STORAGE_KEY, dataItem);
	}

	async getDataItems(): Promise<any> {
		const dataItem = await this.storage.get(STORAGE_KEY);

		if (dataItem === null) {
			return [];
		} else {
			const requests = [];

			dataItem.forEach(data => {
				const request = this.fetchPrice(data);
				requests.push(request);
			});

			try {
				const results = await Promise.all(requests);
				dataItem.map((data, index) => {
					data.value = results[index].ticker.price;
				});

				return dataItem;
			} catch (err) {
				console.log(err);
				return false;
			}
		}
	}

	async fetchPrice(holding): Promise<any> {
		const response = await fetch(
			'https://api.cryptonator.com/api/ticker/' + holding.crypto + '-' + holding.currency
		);

		return await response.json();
	}
}

