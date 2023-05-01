import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GettService {
weather_details:any;
 weatherURL:string=" https://api.openweathermap.org/data/2.5/weather?q=";
  
constructor(public httpClient:HttpClient){}
getWeatherData(city:any){
//apiurl : https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=d85d6b62cd5b3d11e07f09beffd5f12b&units=metric

let appId='&appid=';
let key='d85d6b62cd5b3d11e07f09beffd5f12b';
let tempUnit='&units=metric';
let language='&lang=hi';
let weatherurl=this.weatherURL+city+language+appId+key+tempUnit;
console.log(weatherurl);
return this.httpClient.get(weatherurl)

}




  


  }

