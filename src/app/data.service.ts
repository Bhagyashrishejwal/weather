import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

//let newsURL='https://newsapi.org/v2/everything?q=tesla&from=2023-05-29&sortBy=publishedAt&apiKey=14b769cfef324452992bec95cf053845'
//console.log('newsURL',newsURL);
//let url='https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=14b769cfef324452992bec95cf053845';
//console.log(url);
 //url='https://newsapi.org/v2/everything?q=tesla&from=2023-05-29&sortBy=publishedAt&apiKey=14b769cfef324452992bec95cf053845';
//topHeadlines():Observable<any>{
//return this.http.get(this.url)
}
