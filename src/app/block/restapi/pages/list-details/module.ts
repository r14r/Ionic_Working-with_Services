
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ListDetailsPageRestAPI } from "./page";

const routes: Routes = [{ path: "", component: ListDetailsPageRestAPI }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListDetailsPageRestAPI]
})
export class ListDetailsPageRestAPIModule {}
