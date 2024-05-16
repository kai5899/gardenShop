import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ButtonComponent } from './widgets/button/button.component';
import { FloatingIconComponent } from './widgets/floating-icon/floating-icon.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { CategoryWidgetComponent } from './widgets/category-widget/category-widget.component';
import { ProductwidgetComponent } from './widgets/productwidget/productwidget.component';
import { ReviewsSectionComponent } from './reviews-section/reviews-section.component';
import { ReviewWidgetComponent } from './widgets/review-widget/review-widget.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ButtonComponent,
    FloatingIconComponent,
    AboutComponent,
    ProductsComponent,
    CategoryWidgetComponent,
    ProductwidgetComponent,
    ReviewsSectionComponent,
    ReviewWidgetComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
