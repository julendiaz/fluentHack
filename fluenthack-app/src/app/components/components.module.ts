import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseCardComponent } from './exercise-card/exercise-card.component';
import { StoryProgressButtonComponent } from './story-progress-button/story-progress-button.component';

@NgModule({
  declarations: [
    ExerciseCardComponent,
    StoryProgressButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExerciseCardComponent,
    StoryProgressButtonComponent
  ]
})
export class ComponentsModule { }
