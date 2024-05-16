import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text : String ="default";

  @Input() backgroundColor: string = "var(--light-green)";

  @Input() textColor: string = "white";
 
}
