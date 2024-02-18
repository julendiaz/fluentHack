import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fluenthack-app';
  exercises = [
    { id: 1, title: 'Telc B2 Speaking Part 1' },
    { id: 2, title: 'Telc B2 Speaking Part 2' },
    // Add more exercises as needed
  ];
}
