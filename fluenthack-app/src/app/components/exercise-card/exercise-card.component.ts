import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrl: './exercise-card.component.scss'
})
export class ExerciseCardComponent {
  @Input() exercise: { id: number, title: string } = { id: 0, title: '' };


  constructor(private router: Router) { }


  goToProgressPage(exerciseId: number) {
    // Here you can add the logic to navigate to the progress page
    this.router.navigate(['/progress', exerciseId]);
  }
}
