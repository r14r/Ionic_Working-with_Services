import { Injectable } from '@angular/core';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

import { Toolbox } from 'src/app/helpers/toolbox';
import { DataItem } from '../model/data.model';

const ITEMS_KEY = 'STORAGE_ITEMS_KEY';

@Injectable({
	providedIn: 'root'
})
export class StorageService {
	toolbox = new Toolbox('StorageService');

	constructor() {
		this.toolbox.log('constructor');
	}

	async set(key: string, value: any): Promise<void> {
		return await Storage.set({ key, value: JSON.stringify(value) });
	}

	async get(key: string): Promise<any> {
		const item = await Storage.get({ key });
		return JSON.parse(item.value);
	}

	async del(key: string): Promise<void> {
		await Storage.remove({ key });
	}

	async clear() {
		await Storage.clear();
	}

	deleteItem(id: number): Promise<DataItem> {
		return this.get(ITEMS_KEY).then((items: DataItem[]) => {
			if (!items || items.length === 0) {
				return null;
			}

			const toKeep: DataItem[] = [];


			for (const i of items) {
				if (i.id !== id) {
					toKeep.push(i);
				}
			}

			this.set(ITEMS_KEY, toKeep);
			/*
			return this.set(ITEMS_KEY, toKeep);
			*/
		});
	}


	addItem(item: DataItem): Promise<DataItem[]> {
		this.toolbox.log('add', 'item=' + item.name);

		item.timestamp = Date.now();

		return this.get(ITEMS_KEY).then((items: DataItem[]) => {
			if (items) {
				items.push(item);
			} else {
				items = [item];
			}

			this.toolbox.log('add', 'number of items=' + items.length);

			this.set(ITEMS_KEY, items);
			return items;
		});
	}

	readItems(): Promise<DataItem[]> {
		this.toolbox.log('readall');

		return this.get(ITEMS_KEY).then((items: DataItem[]) => {
			items = items || [];

			this.toolbox.log('readall', 'number of items=' + items.length);
			this.toolbox.log('readall', JSON.stringify(items));

			return items;
		});
	}

	update(item: DataItem): Promise<DataItem> {
		return this.get(ITEMS_KEY).then((items: DataItem[]) => {
			if (!items || items.length === 0) {
				return null;
			}

			const newItems: DataItem[] = [];

			for (const i of items) {
				if (i.id === item.id) {
					newItems.push(item);
				} else {
					newItems.push(i);
				}
			}
			this.set(ITEMS_KEY, newItems);
		});
	}
}
