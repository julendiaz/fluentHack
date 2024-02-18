// app.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component'; // Make sure to adjust this based on your actual component file
import { ProgressComponent } from './pages/progress/progress.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ComponentsModule,
    PagesModule,
    RouterModule.forRoot([
      { path: 'progress', component: ProgressComponent },
      // Add other routes as needed
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
