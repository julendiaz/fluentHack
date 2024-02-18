import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [ProgressComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    ProgressComponent
  ]
})
export class PagesModule { }
