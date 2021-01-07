import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-navbar',
  templateUrl: './new-navbar.component.html',
  styleUrls: ['./new-navbar.component.css']
})
export class NewNavbarComponent implements OnInit {
  @Output() pageName: EventEmitter<string> = new EventEmitter<string>();


  scrollToComponent(x) {
    this.pageName.emit(x);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
