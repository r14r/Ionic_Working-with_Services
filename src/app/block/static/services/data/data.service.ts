import { Injectable } from '@angular/core';

import { DataModel } from '../../models/data.model';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	private icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane', 'american-football', 'boat', 'bluetooth', 'build'];

	currentItem: DataModel;
	
	items: DataModel[] = [];

	constructor() {
		console.log('DataServices/Static::constructor | ');
	}

	getData(): DataModel[] {
		console.log('DataServices/Static::getData | ');

		this.items = [];

		for (let i = 1; i < 21; i++) {
			var icon = this.icons[Math.floor(Math.random() * this.icons.length)];

			this.items.push(new DataModel('Item ' + i, 'This is item #' + i, icon));
		}

		console.log('DataServices/Static::getData | item = ', this.items);
		return this.items;
	}

	getItem(title) {
		console.log('DataServices/Static::getItem | title = ', title);
		
		let item = this.items.find(item => item.title === title)
		console.log('DataServices/JSON::getItem | item=' + item);

		return item;
	}
}
