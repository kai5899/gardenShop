import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-widget',
  templateUrl: './review-widget.component.html',
  styleUrls: ['./review-widget.component.css']
})
export class ReviewWidgetComponent  {



  review : String = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos reiciendis doloribus. Placeat maiores ipsum doloribus temporibus et eligendi est.";

  reviewer : String = "John Doe";

  imageProfile : String = 'https://source.unsplash.com/random/100x100';

  rating : number = this.getRandomNumberBetween1And5();

   getRandomNumberBetween1And5(): number {
    return Math.floor(Math.random() * 5) + 1;

   
}
}
