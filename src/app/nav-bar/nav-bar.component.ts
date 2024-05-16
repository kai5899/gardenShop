import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Output() navigate = new EventEmitter<string>();


  currentSection :number = 0;

  onNavigate(target: string ,index :number) {
    this.navigate.emit(target);
    this.currentSection = index;
  }

 
}
