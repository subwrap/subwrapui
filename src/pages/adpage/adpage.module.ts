import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdPage } from './adpage';

@NgModule({
  declarations: [
    AdPage,
  ],
  imports: [
    IonicPageModule.forChild(AdPage),
  ],
})
export class AdPageModule {}
