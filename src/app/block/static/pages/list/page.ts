import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data/data.service';
import { DataModel } from '../../models/data.model';

@Component({
	selector: 'app-listpage-static',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class StaticListPage implements OnInit {
	public items: Array<DataModel> = [];

	constructor(private dataService: DataService, public router: Router) {
		console.log('StaticListPage::constructor |');

		console.log('StaticListPage::constructor | getData');
		this.items = dataService.getData();

		console.log('StaticListPage::constructor | items = ', this.items);
	}

	ngOnInit() {
		console.log('StaticListPage::ngOnInit | ');
	}

	navigateTo(item) {
		console.log('StaticListPage::navigateTo | item = ', item);

		this.dataService.currentItem = item;
		this.router.navigate(['/list-details-static/' + item.name]);
	}
}
