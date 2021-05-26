import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

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
  courses;

  // a constructor is where we initialize and object
  constructor() {
    let service = new CoursesService();

    //initialize it
    this.courses = service.getCourses();
  }

  //method
  getTitle() {
    return this.title;
  }

  // Logic for calling an HTTP server
}
