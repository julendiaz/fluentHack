import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-story-progress-button',
  templateUrl: './story-progress-button.component.html',
  styleUrl: './story-progress-button.component.scss'
})
export class StoryProgressButtonComponent {
  @Input() index: number = 0;
  @Input() completed: boolean = false;
}
