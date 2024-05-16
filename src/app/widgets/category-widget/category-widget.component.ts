import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-widget',
  templateUrl: './category-widget.component.html',
  styleUrls: ['./category-widget.component.css']
})
export class CategoryWidgetComponent {

  @Input() txt :String = "default";

  @Input() isSelected : boolean = false;

}
