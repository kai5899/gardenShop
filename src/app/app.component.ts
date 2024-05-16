import { Component,ViewChild, ElementRef } from '@angular/core';
// import { ViewportScroller } from '@angular/common';
// import { NavigationEnd, Router } from '@angular/router';
// import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  @ViewChild('home') home!: ElementRef;
  @ViewChild('about') about!: ElementRef;
  @ViewChild('products') products!: ElementRef;
  @ViewChild('reviews') reviews!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;


  constructor() {}

  scrollTo(element: ElementRef) {
    element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }


  handleNavigation(target: string) {
    if (target === 'home') {
      this.scrollTo(this.home);
    } else if (target === 'about') {
      this.scrollTo(this.about);
    } else if (target === 'products') {
      this.scrollTo(this.products);
    }
    else if (target === 'reviews') {
      this.scrollTo(this.reviews);
    }
    else if (target === 'contact') {
      this.scrollTo(this.contact);
    }
  }

  // constructor(private router: Router, private viewportScroller: ViewportScroller) {
  //   this.router.events.pipe(
  //     filter(e => e instanceof NavigationEnd)
  //   ).subscribe(() => {
  //     this.viewportScroller.scrollToPosition([0, 0]);
  //   });
  // }
  title = 'app1';
}
