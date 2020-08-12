import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Toolbox } from './helpers/toolbox';


import { StorageService } from './block/storage/service/storage.service';
import { LocalStorageService } from './block/localstorage/service/localstorage.service';
import { LocalDataService } from './block/localstorage/service/data.service';

@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		HttpClientModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		HttpClient,
		StorageService, LocalStorageService, LocalDataService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	toolbox = new Toolbox('AppModule');

	constructor() { this.toolbox.log('constructor'); }
}
