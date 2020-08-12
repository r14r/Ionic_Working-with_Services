import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { Routes, RouterModule } from "@angular/router";

import { StaticListDetailsPage } from "./page";

const routes: Routes = [
	{ path: "", component: StaticListDetailsPage }
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [StaticListDetailsPage]
})
export class StaticListDetailsPageModule { }
