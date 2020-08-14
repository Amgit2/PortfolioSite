import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @Output() public childEvent = new EventEmitter(); 

  title = 'Amit Hiremath';
  public name = " "; 
  public message =" "; 
  public content = " THIS IS EMPTY"

  showIntro(){
    this.content = "hello sir my name is amit myself cs major"
  }
  showEdu(){
    this.content = "yo yo i got mad edu bro"
  }
  showWE(){
    this.content = " I worked at all the places"
  }
  showAboutMe(){
    this.content = "name: Amit Alter Ego: Hackerman"
  }
  showBoi(){
    this.content = "boi."
  }
  


}