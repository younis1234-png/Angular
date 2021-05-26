import { Component } from '@angular/core';
// in order to convert CoursesComponent we need to add meta data to it, that where the @Component comes to play
// We use a DECORATOR TO ACHIEVE THIS in Angular
// All it does is to make THE CLASS A COMPONENT
// It called a decorator function and it takes peroperties!!!
@Component({
  selector: 'courses', // basic css  <div class="courses">   = => ".courses" or just html element
  template: '<h2>Courses from CoursesComponent</h2>',
})
export class CoursesComponent {}



//We create our CoursesComponent
//We added our componet inside the declaration's array in (APP.MODULE,TS)
//We used in in the template of (app.compoment.html)