import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForcastingComponent } from './forcasting/forcasting.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path:'landing',component:LandingComponent},
{path:'',redirectTo:'/landing',pathMatch:'full'},

{path:'forcasting',component:ForcastingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
