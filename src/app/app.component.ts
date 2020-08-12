import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Toolbox } from './helpers/toolbox';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	toolbox = new Toolbox('AppComponent');

	public appPages = [
		{ title: 'Home', url: '/home', icon: 'home' },
		{ title: 'Static Data', url: '/list-static', icon: 'list' },
		{ title: 'Data from JSON', url: '/list-json', icon: 'list' },
		{ title: 'Data from RestAPI', url: '/list-restapi', icon: 'list' },
		{ title: 'Storage', url: '/storage', icon: 'list' },
		{ title: 'Local Storage', url: '/localstorage', icon: 'list' }
	];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.toolbox.log('constructor');

		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			/*
			this.statusBar.styleDefault();
			this.splashScreen.hide();
			*/
		});
	}
}
