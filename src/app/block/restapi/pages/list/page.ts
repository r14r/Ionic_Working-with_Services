import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data/data.service';

@Component({
	selector: 'app-list',
	templateUrl: 'page.html',
	styleUrls: [ 'page.scss' ]
})
export class ListPageRestAPI implements OnInit {
	data: any;

	constructor(public dataService: DataService, public router: Router) {
		console.log('ListPageRestAPI::constructor | ');

		console.log('ListPageRestAPI::constructor | dataService.getData');
		this.data = dataService.getData();
		console.log('ListPageRestAPI::constructor | dataService.getData done');

		this.data.subscribe(data => {
			console.log("DataService::getData | subscribe=" + typeof this.data);
			console.log("DataService::getData | subscribe #=" + this.data.length);
		})

		console.log('ListPageRestAPI::constructor | done = ' + this.data);

	}

	ngOnInit() {}

	navigate(name) {
		console.log('ListPageRestAPI:navigate:item=', name);

		this.router.navigateByUrl('/list-details-restapi/' + name);
	}
}
