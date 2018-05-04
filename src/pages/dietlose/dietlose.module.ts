import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DietlosePage } from './dietlose';

@NgModule({
  declarations: [
    DietlosePage,
  ],
  imports: [
    IonicPageModule.forChild(DietlosePage),
  ],
})
export class DietlosePageModule {}
