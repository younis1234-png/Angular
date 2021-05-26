import { Component } from '@angular/core';
// in order to convert CoursesComponent we need to add meta data to it, that where the @Component comes to play
// We use a DECORATOR TO ACHIEVE THIS in Angular
// All it does is to make THE CLASS A COMPONENT

@Component({
  selector: 'courses', // basic css  <div class="courses">   = => ".courses" or just html element
  template: '<h2>Courses</h2>',
})
export class CoursesComponent {}
