import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { DataModel } from "../../models/data.model";

@Injectable({
  providedIn: "root"
})
export class DataService {
  // data: Observable<any>;
  data: DataModel[] = [];

  url = "https://restcountries.eu/rest/v2/all";

  constructor(private http: HttpClient) {
    console.log("DataServices/RestAPI:constructor");
  }

  getData(): Observable<DataModel[]> {
    console.log("DataServices/RestAPI:::getData |");

	let _observable = this.http.get<DataModel[]>(this.url);
	console.log("DataServices/RestAPI:::getData | _observable=");
	console.dir(_observable);

	console.log("DataServices/RestAPI:::getData | subscribing to ");
	_observable.subscribe(data => {
		console.log("DataServices/RestAPI:::getData | subscribe");
		this.data = data as DataModel[]
		console.log("DataServices/RestAPI:::getData | subscribe=" + typeof this.data);
		console.log("DataServices/RestAPI:::getData | subscribe #=" + this.data.length);
    })

	console.log("DataServices/RestAPI:::getData | done=" + typeof this.data);
	return _observable;
  }

  getItem(name): DataModel {
    console.log("DataService:getItem:name=" + name);
    console.log("DataService:getItem:data=" + typeof this.data);

	let item = this.data.find(item => item.name === name)
	console.log("DataServices/JSON:getItem:item=" + item.name);

	return item;

    return new DataModel("RESULTxx");
  }

  getRequest() {
    let _prefix='DataServices/RestAPI::getRequest';

    this.http.get(this.url, { observe: "response" }).subscribe(
      res => {
        console.log(_prefix + ":res=", res);
        if (res.status == 200) {
          console.log(_prefix + ":body=" + res.body);
          console.log(_prefix + ":type=" + typeof res.body);
          
          console.log(_prefix + ":return = " + { status: res.status, body: res.body });
        } else {
          console.log({ error: res });
        }
      },
      error => {
        console.log("error of " + this.url + ": ", error);
        console.log({error: error});
      }
    );
  }
}
