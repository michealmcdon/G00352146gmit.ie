import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExerciseLosePage } from './exercise-lose';

@NgModule({
  declarations: [
    ExerciseLosePage,
  ],
  imports: [
    IonicPageModule.forChild(ExerciseLosePage),
  ],
})
export class ExerciseLosePageModule {}
