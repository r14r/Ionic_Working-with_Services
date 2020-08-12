import { DataModel } from "../../models/data.model";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { DataService } from "../../services/data/data.service";

@Component({
  selector: "app-list-json-tab-list",
  templateUrl: "page.html",
  styleUrls: [ "page.scss" ]
})
export class ListPageJSON implements OnInit {
  public data: Array<DataModel> = [];

  constructor(public dataService: DataService, public router: Router) {
    this.getData();
  }

  ngOnInit() {}

  navigate(name) {
    this.router.navigate(["/list-details-json/" + name]);
  }

  getData() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }
}
