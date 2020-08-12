import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ShareDataServiceSingleton } from '../../services/sharedata/sharedata.service';

@Component({
	selector: 'app-list',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class ShareDataPage implements OnInit {
	data: any;

	constructor(public router: Router) {
		console.log('ListPageRestAPI::constructor | ');

	}

	ngOnInit() { }

	addData(data) {
		ShareDataServiceSingleton.addData(data);
	}

	async getData(data) {
		this.data = await ShareDataServiceSingleton.getData();
	}

	navigate(name) {
		console.log('ListPageRestAPI:navigate:item=', name);

		this.router.navigateByUrl('/list-details-restapi/' + name);
	}
}
