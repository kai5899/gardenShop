import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  // {path:"",redirectTo : "home",pathMatch:"full"}, //first time run



  // {path:"home",component : HomeComponent},
  // {path:"about",component:AboutComponent}

];




@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Adjusts scroll position on navigation
    anchorScrolling: 'enabled',  // Enables scrolling to anchor elements
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


  //to path params we do home/:id
  // in the comp we will use the constructor , access the route 
  // this.route.navigate(['second':value])


  // ngOnInit will run when the comp is first rendered

  //to access params , import activatedRoute then this.route.snapchot.paramMap.get("param Name")

  // {path:"**" ,component : NotFoundComponent}  not found component 



// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })