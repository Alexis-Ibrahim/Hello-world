import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template:'<h2>{{title}}</h2>',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title="Title"
  constructor() { 
  }

  ngOnInit(): void {
  }

}
