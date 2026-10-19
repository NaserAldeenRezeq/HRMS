import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgFor, NgClass, NgStyle } from '@angular/common';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Decorator
@Component({
  //! component, directive, module, pipe
  imports: [RouterOutlet, NgIf, NgFor, NgClass, NgStyle, FormsModule, ReactiveFormsModule, CommonModule],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})


export class App {


  form = new FormGroup({
    name : new FormControl(null, Validators.required),
    email : new FormControl(null, [Validators.required, Validators.email]),
    phone : new FormControl(null, [Validators.required, Validators.minLength(9), Validators.maxLength(10)]),
    age : new FormControl(null, [Validators.min(18), Validators.max(35)]),
    courseId : new FormControl(1,Validators.required)
  });


  courses = [
    {id : 1, name: "Asp.Net"},
    {id : 2, name: "Angular"},
    {id : 3, name: "Python"},
    {id : 4, name: "Java"},
  ]

  resetForm(){
    this.form.reset({courseId: 1});
  }

  submit(){
    let name = this.form.value.name;
    let courseId = this.form.value.courseId;
    let courseName = this.courses.find(x => x.id == courseId)?.name;

    alert(`Welcome ${name} to the academy.
      We will contact you shortly about the ${courseName} course`);
  }






  price : number = 112233.44;

  date : Date = new Date();



};

