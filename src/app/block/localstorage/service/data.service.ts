
import { DataItem } from '../model/data.model';
import { LocalStorageService } from './localstorage.service';

import { Toolbox } from 'src/app/helpers/toolbox';

//
export class LocalDataService {
	toolbox = new Toolbox('DataService');

	constructor(private storage: LocalStorageService) {
		this.toolbox.log('constructor');
	}
	async add(dataItem: DataItem): Promise<void> {
		const data = (await this.storage.get()) || [];
		data.push(dataItem);

		await this.storage.set(data);
	}

	async remove(id): Promise<void> {
		this.toolbox.log('remove');

		const data = await this.storage.get();
		data.splice(data.indexOf(id), 1);

		await this.storage.set(data);
	}

	async get(): Promise<any> {
		this.toolbox.log('get');

		const data = await this.storage.get();

		if (data === null) {
			return [];
		} else {
			const requests = [];

			data.forEach(item => {
				const request = this.handler(item);
				requests.push(request);
			});

			try {
				const results = await Promise.all(requests);
				data.map((item, index) => {
					// ;
				});

				return data;
			} catch (err) {
				console.log(err);
				return false;
			}
		}
	}

	async update(item): Promise<void> {
		this.toolbox.log('update');

		const data = await this.storage.get();
		// data.splice(data.indexOf(item), 1);

		await this.storage.set(data);
	}

	async clear(): Promise<void> {
		this.toolbox.log('clear');

		await this.storage.clear();
	}

	handler(item) { }
}

