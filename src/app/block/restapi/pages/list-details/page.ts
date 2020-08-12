import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable, BehaviorSubject } from "rxjs";

import { DataService } from "../../services/data/data.service";
import { DataModel } from "../../models/data.model";

@Component({
	selector: "app-list-details",
	templateUrl: "./page.html",
	styleUrls: ["./page.scss"]
})
export class ListDetailsPageRestAPI implements OnInit {
	item: DataModel;

	items: Array<{ key: string, val: string }> = [];

	constructor(private route: ActivatedRoute, private dataService: DataService) {
		console.log("ListDetailsPageRestAPI::constructor | ");
	}

	ionViewWillEnter() {
		console.log("ListDetailsPageRestAPI::ionViewWillEnter | ");

		let name = this.route.snapshot.paramMap.get("name");
		console.log("ListDetailsPageRestAPI::ionViewWillEnter | item=", name);

		this.item = this.dataService.getItem(name);

		let keys = Object.keys(this.item);

		keys.forEach(key => {
			let val = this.item[key];

			console.log("key=", key, " val=", val);
			this.items.push({ key: key, val: val })
		});
	}

	ngOnInit() { }
}
