import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  //generate event
  @Output() toggle = new EventEmitter();
  
  menuClicked(){
    this.toggle.emit()
  }
}
