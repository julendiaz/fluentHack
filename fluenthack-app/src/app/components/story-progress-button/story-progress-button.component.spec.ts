import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryProgressButtonComponent } from './story-progress-button.component';

describe('StoryProgressButtonComponent', () => {
  let component: StoryProgressButtonComponent;
  let fixture: ComponentFixture<StoryProgressButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryProgressButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoryProgressButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
