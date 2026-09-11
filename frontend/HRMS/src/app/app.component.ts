import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgFor, NgClass, NgStyle } from '@angular/common'

// Decorator
@Component({
  imports: [RouterOutlet, NgIf, NgFor, NgClass, NgStyle],
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

  temp(x : number , y : string) : number
  {
    let num : number;
    num = 15;
    return num;
  }
}




