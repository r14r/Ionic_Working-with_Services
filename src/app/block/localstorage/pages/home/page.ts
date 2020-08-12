import { Component, OnInit } from '@angular/core';

import { ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';

import { Router } from '@angular/router';

import { Toolbox } from 'src/app/helpers/toolbox';

import { DataItem } from '../../model/data.model';
import { LocalDataService } from '../../service/data.service';

@Component({
	selector: 'app-storage-page',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class StoragePage implements OnInit {
	toolbox = new Toolbox('StoragePage');

	//
	@ViewChild('itemlist', { static: false }) itemList: IonList;
	selectedItem: any;

	//
	items: DataItem[];

	public name: string;
	public desc: string;
	public data: string;

	private icons = [
		'flask',
		'wifi',
		'beer',
		'football',
		'basketball',
		'paper-plane',
		'american-football',
		'boat',
		'bluetooth',
		'build'
	];

	constructor(public router: Router, private dataService: LocalDataService) {
		this.toolbox.log('constructor');
	}

	ngOnInit() {
		this.toolbox.log('ngOnInit');

		this.readItems();
	}

	init() {
		this.toolbox.log('init');

		for (let i = 1; i < 6; i++) {
			const item: DataItem = {
				name: 'Item ' + i,
				desc: 'This is item #' + i,
				data: '',
				icon: this.icons[i],
				timestamp: Date.now(),
				id: Date.now()
			};

			this.dataService.add(item);
			this.toolbox.log('constructor', 'add item ' + item.name);
		}

		this.readItems();
	}

	async add() {
		const item: DataItem = new DataItem(this.name, this.desc, this.data || '');

		this.toolbox.log('add', 'item=' + JSON.stringify(item));

		await this.dataService.add(item);
		this.readItems();
	}

	async update(item: DataItem) {
		this.toolbox.log('update', 'id=' + item.id + ' name=' + item.name);

		await this.dataService.update(item);

		this.itemList.closeSlidingItems();
		this.readItems();
	}

	async delete(item: DataItem) {
		this.toolbox.log('delete', 'id=' + item.id + ' name=' + item.name);

		await this.dataService.remove(item.id);

		this.itemList.closeSlidingItems();
		this.readItems();
	}

	readItems() {
		this.toolbox.log('readItems');

		this.dataService.get().then(items => {
			this.items = items;

			this.toolbox.log('readall', 'got ' + this.items.length + ' items');
		});
	}

	clear() {
		this.toolbox.log('clear');
		this.dataService.clear();

		this.readItems();
	}
}
