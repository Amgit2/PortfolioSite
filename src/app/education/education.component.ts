import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  schoolName: String;
  schoolInfo: String; 

  constructor() {
    this.schoolName ="New York Institute of Technology";
   }

  nyitClick(){
      this.schoolName = "New York Institute of Technology"
  }
  kuClick(){
      this.schoolName ="Kettering University"
  }
  tisbClick(){
      this.schoolName = "The International School Bangalore"
  }

  ngOnInit(): void {
  }

}
