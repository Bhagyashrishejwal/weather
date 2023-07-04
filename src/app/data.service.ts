import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }



apiKey ="14b769cfef324452992bec95cf053845";
selectedCountry = 'us'

apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.selectedCountry}&apiKey=${this.apiKey}`;

getNews(country: string){
  this.apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${this.apiKey}`
  return this.http.get(this.apiUrl);
}

allNews: any;

}
