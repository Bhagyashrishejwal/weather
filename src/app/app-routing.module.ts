import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

const routes: Routes = [{path:'listing-page',component:ListingPageComponent},
{path:'',redirectTo:'/listing-page',pathMatch:'full'},
{path:'news/:title',component:NewsDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
