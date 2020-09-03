import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  schoolName: String;
  schoolInfo: String; 
  degree: String; 
  years: String; 
  imgSrc: String;

  constructor() {
    this.schoolName ="New York Institute of Technology";
    this.degree = "Master of Science in Computer Science" 
    this.years = "September 2019 - May 2021" 
    this.imgSrc = "/assets/img/NYIT-CS-logo.png"
   }

  nyitClick(){
      this.schoolName = "New York Institute of Technology";
      this.degree = "Master of Science in Computer Science"; 
      this.years = "September 2019 - May 2021";
      this.imgSrc = "/assets/img/NYIT-CS-logo.png";
  }
  kuClick(){
      this.schoolName ="Kettering University";
      this.degree = "Bachelor of Science in Computer Engineering" 
      this.years = "July 2013 - May 2018" 
      this.imgSrc = "/assets/img/KU-CS-logo.png"
  }
  tisbClick(){
      this.schoolName = "The International School Bangalore"
      this.degree = "International Baccalaureate" 
      this.years = "January 2005 - May 2013" 
      this.imgSrc = "/assets/img/TISB-CS-logo.png"
  }

  ngOnInit(): void {
  }

}
