import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GettService } from '../gett.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
title='Click Here For Details ';
constructor(private router:Router,private gettService:GettService){

}
Navigating(){
 // if(Journey=='forcasting'){
   this.router.navigateByUrl('/forcasting')
}
  
 // else {
  //  this.router.navigateByUrl('/landing');
 //}
//}
}

