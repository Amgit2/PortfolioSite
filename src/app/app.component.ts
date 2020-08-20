import { Component, Output, EventEmitter } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})

export class AppComponent {

  faCoffee = faCoffee;
  
  @Output() public childEvent = new EventEmitter(); 

  title = 'Amit Hiremath';
  public name = " "; 
  public message =" "; 
  public content = " THIS IS EMPTY"
  public subheading = "Introduction"

  showIntro(){
    this.content = "hello sir my name is amit myself cs major"
    this.subheading = "Introduction"
  }
  showEdu(){
    this.content = "yo yo i got mad edu bro"
    this.subheading = "Education"
  }
  showWE(){
    this.content = " I worked at all the places"
    this.subheading = "Work Experience"
  }
  showAboutMe(){
    this.content = "name: Amit Alter Ego: Hackerman"
    this.subheading = "About Me"
  }
  showBoi(){
    this.content = "boi."
    this.subheading = "Boi"
  }
  


}