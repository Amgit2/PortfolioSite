import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2> 
      {{"Hello" + name| uppercase}}
    </h2>      
    <button (click) = "fireEvent()"> Send Event</button>  
    <button (click) = "onClick()"> Clear Event</button>    
    <button (click) = "onClick2()"> Change Title </button> 
    `,
  styles: [` `]
})
export class TestComponent implements OnInit {

  @Input("parentData") public name; 
   
  @Output() public childEvent = new EventEmitter(); 
  @Output() public changeTitleEvent = new EventEmitter(); 


  ngOnInit(){

}
  fireEvent(){
    this.childEvent.emit("child Event emitted :O *emmision intensifies* ")
  }
  onClick(){
    this.childEvent.emit(":( "); 
  }
  onClick2(){
    this.changeTitleEvent.emit("Boi, dont change this title, i swur."); 
  }
  constructor() { }
}
