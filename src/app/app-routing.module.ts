import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Toolbox } from './helpers/toolbox';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', loadChildren: './pages/home/module#HomePageModule' },

	{ path: 'list-restapi', loadChildren: './block/restapi/pages/list/module#ListPageRestAPIModule' },
	{ path: 'list-details-restapi/:name', loadChildren: './block/restapi/pages/list-details/module#ListDetailsPageRestAPIModule' },

	{ path: 'list-json', loadChildren: './block/json/pages/list/module#ListPageJSONModule' },
	{ path: 'list-details-json/:name', loadChildren: './block/json/pages/list-details/module#ListDetailsPageJSONModule' },

	{ path: 'list-static', loadChildren: './block/static/pages/list/module#StaticListPageModule' },
	{ path: 'list-details-static/:name', loadChildren: './block/static/pages/list-details/module#StaticListDetailsPageModule' },

	{ path: 'storage', loadChildren: './block/storage/pages/home/module#StoragePageModule' },
	{ path: 'localstorage', loadChildren: './block/localstorage/pages/home/module#StoragePageModule' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
	toolbox = new Toolbox('AppRoutingModule');

	constructor() { this.toolbox.log('constructor'); }
}
