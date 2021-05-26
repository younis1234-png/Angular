import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: '<h2>{{title}}</h2>',
})
export class CoursesComponent {
  title = 'List of courses';

  getTitle() {
    return this.title;
  }
}

// With Angular CLI
// The  best way to generate a component
// ng g c course
