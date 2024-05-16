import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-floating-icon',
  templateUrl: './floating-icon.component.html',
  styleUrls: ['./floating-icon.component.css']
})
export class FloatingIconComponent {

  @Input() top? : String  ;
  @Input() left?: String ;
  @Input() right?:String ;
  @Input() bottom?:String ;

  @Input() icon:String = "";

  src = './assets/icons/';

  ngOnInit(){
    this.src =  this.src + this.icon + ".png";

    
    
  }

}
