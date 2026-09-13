import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgFor, NgClass, NgStyle } from '@angular/common'
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

// Decorator
@Component({
  //! component, directive, module, pipe
  imports: [RouterOutlet, NgIf, NgFor, NgClass, NgStyle, FormsModule, ReactiveFormsModule],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})


export class App {
  // protected readonly title = signal('HRMS');
  title: string = "Welcome to Angular from Typescript";
  number: number = 55.2245;
  bool: boolean = true;
  arr_s : string[] = ["one", "two", "three"];
  arr = [12, "one", true];

  students = [
    {id:0, name: "stu1", mark : 89},
    {id:1, name: "stu2", mark : 77},
    {id:2, name: "stu3", mark : 43},
    {id:3, name: "stu4", mark : 97},
    {id:4, name: "stu5", mark : 72},
    {id:5, name: "stu6", mark : 81}
  ];

  images = [
    "https://cdn.al-ain.com/images/2023/12/13/122-192921-best-ten-stadiums-camp-nou-bernabeu_700x400.jpg",
    "https://cdn.al-ain.com/lg/images/2023/12/13/122-192922-best-ten-stadiums-camp-nou-bernabeu-2.png",
    "https://cdn.al-ain.com/lg/images/2023/12/13/122-192922-best-ten-stadiums-camp-nou-bernabeu-3.png",
    "https://cdn.al-ain.com/lg/images/2023/12/13/122-192923-best-ten-stadiums-camp-nou-bernabeu-6.png",
    "https://cdn.al-ain.com/lg/images/2023/12/13/122-192923-best-ten-stadiums-camp-nou-bernabeu-5.png"
  ];

  currentIndex: number = 0; //* Global Variable

  name : string = "employee";

  form = new FormGroup({
    // Form Controls
    name: new FormControl("Employee")
  });

  next(){
    if(this.currentIndex < this.images.length - 1){
      this.currentIndex++;
    }
  }

  previous(){
    if(this.currentIndex > 0){
      this.currentIndex--;
    }
  }



  temp(x : number , y : string) : number
  {
    let num : number;
    num = 15;
    return num;
  }
}




