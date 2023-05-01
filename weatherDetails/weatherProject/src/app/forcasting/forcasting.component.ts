import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GettService } from '../gett.service';

@Component({
  selector: 'app-forcasting',
  templateUrl: './forcasting.component.html',
  styleUrls: ['./forcasting.component.scss']
})
export class ForcastingComponent {
city:any;
  weatherdetails:any;
  temp: any;
  tempmax: any;
  tempmin: any;
  pressure: any;
  wind: any;
constructor(private gettService:GettService,private router:Router){
    
}
async weatherDetails(){
  console.log(this.city);
 this.weatherdetails = await this.gettService.getWeatherData(this.city).toPromise();
  console.log('weather Details',this.weatherdetails);
  this.temp = this.weatherdetails.main.temp;
  this.tempmax=this.weatherdetails.main.temp_max;
  this.tempmin=this.weatherdetails.main.temp_min;
  this.pressure=this.weatherdetails.main.pressure
  this.wind=this.weatherdetails.wind.speed;
}
}
