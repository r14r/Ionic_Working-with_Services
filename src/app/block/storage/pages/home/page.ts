import { Component, OnInit } from '@angular/core';

import { ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';

import { Router } from '@angular/router';

import { Toolbox } from 'src/app/helpers/toolbox';

import { DataItem } from '../../model/data.model';
import { StorageService } from '../../service/storage.service';

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
	newItem = {} as DataItem;

	//
	items: DataItem[];

	private name: string;
	private desc: string;
	private data: string;

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

	constructor(public router: Router, private storage: StorageService) {
		this.toolbox.log('constructor');
	}

	ngOnInit() {
		this.toolbox.log('ngOnInit');

		this.readItems();
	}

	async addDataItem() {
		const item: DataItem = new DataItem(this.name, this.desc, this.data || '');

		await this.storage.addItem(item);
		this.readItems();

		const navCtrl = document.querySelector('ion-router');
		navCtrl.back();
	}

	async init() {
		this.toolbox.log('init');

		await this.storage.clear();

		for (let i = 1; i < 6; i++) {
			const item: DataItem = {
				name: 'Item ' + i,
				desc: 'This is item #' + i,
				data: '',
				icon: this.icons[i],
				timestamp: Date.now(),
				id: Date.now()
			};

			await this.storage.addItem(item);
			this.toolbox.log('constructor', 'add item ' + item.name);
		}

		this.readItems();
	}

	async add(item: DataItem) {
		this.toolbox.log('add', 'item=' + JSON.stringify(item));

		await this.storage.addItem(item);
		this.readItems();
	}

	async update(item: DataItem) {
		this.toolbox.log('update', 'id=' + item.id + ' name=' + item.name);

		await this.storage.update(item);

		this.itemList.closeSlidingItems();
		this.readItems();
	}

	async delete(item: DataItem) {
		this.toolbox.log('delete', 'id=' + item.id + ' name=' + item.name);

		await this.storage.deleteItem(item.id);

		this.itemList.closeSlidingItems();
		this.readItems();
	}

	readItems() {
		this.toolbox.log('readall');

		this.storage.readItems().then(items => {
			this.items = items;

			this.toolbox.log('readall', 'got ' + this.items.length + ' items');
		});
	}

	clear() {
		this.toolbox.log('clear');
		this.storage.clear();

		this.readItems();
	}
}
