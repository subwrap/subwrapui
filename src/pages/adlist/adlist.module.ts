import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdListPage } from './adlist';

@NgModule({
  declarations: [
    AdListPage,
  ],
  imports: [
    IonicPageModule.forChild(AdListPage),
  ],
})
export class AdListPageModule {}
