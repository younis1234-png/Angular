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
  // adding a dependice as a prameter to our constructor
  //
  constructor(service: CoursesService) {
    // is we do the new CoursesService( ==>> we can't change this at run time )
    // let service = new CoursesService();

    //initialize it
    // Dependency Injection: ( our constructor dependency)
    // we need to add CoursesService in our app.module as a providers
    // When angular going to to create an instance of this componeent first, it will instantiate its deoendencies 
    // and than it will inject THOSE DEPENDENCIES INTO THE CONSTROCTOR OF THIS CLASSE
    this.courses = service.getCourses();
  }

  //method
  getTitle() {
    return this.title;
  }

}
