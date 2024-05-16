import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productwidget',
  templateUrl: './productwidget.component.html',
  styleUrls: ['./productwidget.component.css']
})
export class ProductwidgetComponent {

  @Input() image :String = "";
  @Input() name :String = "";
  @Input() price :number = 0;
}
