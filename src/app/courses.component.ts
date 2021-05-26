import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `<h2>{{ getTitle() }}</h2>
    <img src="{{ imageUrl }}" />
    <img [src]="imageUrl" />
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul> `,
})
export class CoursesComponent {
  title = 'List of courses';
  courses;
  imageUrl =
    'https://images.unsplash.com/photo-1622023899195-145dd7db2aab?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60';

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  //method
  getTitle() {
    return this.title;
  }
}
