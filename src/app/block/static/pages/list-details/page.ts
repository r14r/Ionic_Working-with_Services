import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../services/data/data.service';
import { DataModel } from '../../models/data.model';

@Component({
	selector: 'app-listdetails-page-static',
	templateUrl: 'page.html',
	styleUrls: [ 'page.scss' ]
})
export class StaticListDetailsPage implements OnInit {
	item: DataModel;
	items: Array<{ key: string, val: string }> = [];

	flag: string = '';

	constructor(private route: ActivatedRoute, private dataService: DataService) {
		console.log('StaticListDetailsPage:constructor');
	}

	ngOnInit() { 
		console.log('StaticListDetailsPage::ngOnInit | ');

		let name = this.route.snapshot.paramMap.get('name');
		console.log('StaticListDetailsPage::ngOnInit | paramMap.get(name)=', name);

		// this.item = this.dataService.getItem(name);

		this.item = this.dataService.currentItem ;
		console.log('StaticListDetailsPage::ngOnInit | item=', this.item);

		let keys = Object.keys(this.item);
		console.log('StaticListDetailsPage::ngOnInit | keys=', keys);

		keys.forEach(key => {
			let val = this.item[key];

			if (key == 'flag') {
				this.flag = val;
			};

			console.log('StaticListDetailsPage::ngOnInit | key=', key, ' val=', val);
			this.items.push({ key: key, val: val })
		});
	}
}
