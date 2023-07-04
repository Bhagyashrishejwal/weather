import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

interface NewsStructure {
  author: string | null;
content: string | null;
description: string | null;
publishedAt: string | null;
source: {id: string | null, name: string | null};
title: string | null;
url: string | null;
urlToImage: string | null;
}

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss']
})

export class ListingPageComponent {

//newsItems:any[]=[];
//filteredNewsItems:any[]=[];
//selectedCountry:string='';
//fromDate:string='';
//toDate:string='';
//searchTerm:string='';
//topHeadlinesData:any[]=[]
newsList: NewsStructure[] = [];
  selectedCountry: string = 'us';
  fromDate: string = '';
  toDate: string = '';
  searchText: any= '';
//countries:string[]=['US','UK','Canada','Australia'];
constructor(private http:HttpClient,private dataService:DataService,private router:Router){

}
ngOnInit(){

this.fetchNews();
}
fetchNews(): void {
  // const apiKey ="14b769cfef324452992bec95cf053845";
  // const apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.selectedCountry}&apiKey=${apiKey}`;
  //https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=14b769cfef324452992bec95cf053845
//const apiUrl='http://localhost:3000/news'

//const apiUrl=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=14b769cfef324452992bec95cf053845`
  // this.http.get<any>(apiUrl).subscribe(data => {
  //   this.newsList = data.articles;
  // });
  this.dataService.getNews(this.selectedCountry).subscribe((data:any)=>{
    this.newsList = data.articles;
    this.dataService.allNews = this.newsList;
    console.log(this.newsList);
    
  })
}
//fetchNews(){
  //let apikey='14b769cfef324452992bec95cf053845';
  //let url=`https://newsapi.org/v2/everything?q=tesla&from=${this.fromDate}&sortBy=publishedAt&apiKey=${apikey}`;

  //return this.http.get<any>(url).subscribe(response=>{
   // this.newsItems=response;
   // console.log(this.newsItems);
    
  //})
//}

selectCountry(){
  this.fetchNews();
}

}
