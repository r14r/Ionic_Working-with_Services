import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from "rxjs";

import { DataModel } from '../../models/data.model';

import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class DataService {
  url = 'assets/data/restcountries.json';

  data: Observable<DataModel[]>;
  items: DataModel[];

  constructor(private http: HttpClient) {
    console.log("DataServices/JSON::constructor | ");

    this.getData();
  }

  getData() {
    this.data = this.http.get<DataModel[]>(this.url);
    
    this.data.subscribe(data => {
      this.items = data;
      
      console.log("DataServices/JSON::getData | subscribe:items=" + this.items.length);

    });
    return this.data;
  }

  getItem(name){
    console.log("DataServices/JSON::getItem | name=" + name);

    let item=this.items.find(item => item.name === name)
    console.log("DataServices/JSON::getItem | item=" + item.name);

    return item;
  } 
}
