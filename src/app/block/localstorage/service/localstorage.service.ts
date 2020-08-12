import { Injectable } from '@angular/core';

import { Toolbox } from 'src/app/helpers/toolbox';

const STORAGE_KEY = 'STORAGE_ITEMS_KEY';
const storage = window.localStorage;

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {
	toolbox = new Toolbox('LocalStorageService');

	constructor() {
		this.toolbox.log('constructor', 'storage=' + storage);
	}

	set(item: any): Promise<void> {
		this.toolbox.log('set', 'value=' + item);

		return new Promise((resolve, reject) => {
			try {
				if (storage) {
					storage.setItem(STORAGE_KEY, JSON.stringify(item));
					resolve();
				}
			} catch (err) {
				reject(`Could not store object ${err}`);
			}
		});
	}

	get(): Promise<any> {
		this.toolbox.log('get');

		return new Promise((resolve, reject) => {
			try {
				if (storage) {
					const item = storage.getItem(STORAGE_KEY);

					this.toolbox.log('get', 'item=' + item);

					resolve(JSON.parse(item));
				}
				resolve(undefined);
			} catch (err) {
				reject(`Couldnt get object: ${err}`);
			}
		});
	}

	clear(): Promise<void> {
		this.toolbox.log('remove');

		return new Promise((resolve, reject) => {
			try {
				if (storage) {
					storage.removeItem(STORAGE_KEY);
					resolve();
				}
			} catch (err) {
				reject(`Couldnt remove object ${err}`);
			}
		});
	}
}
