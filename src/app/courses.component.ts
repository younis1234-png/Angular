import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `<h2>{{ getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul> `,
})
export class CoursesComponent {
  title = 'List of courses';
  courses = [' course1', 'course2', 'course3'];

  getTitle() {
    return this.title;
  }
}

// Directive
// *ngFor="take an expression"
// let course of courses ====> we defining a variable, this is like a loop variable in javascript
// when angular see this is going to Alternate throught our courses array
