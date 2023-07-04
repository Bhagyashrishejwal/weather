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
newsList: NewsStructure[] = [];
  selectedCountry: string = 'us';
  fromDate: string = '';
  toDate: string = '';
  searchText: any= '';

constructor(private http:HttpClient,private dataService:DataService,private router:Router){

}
ngOnInit(){

this.fetchNews();
}
fetchNews(): void {
  
  this.dataService.getNews(this.selectedCountry).subscribe((data:any)=>{
    this.newsList = data.articles;
    this.dataService.allNews = this.newsList;
    console.log(this.newsList);
    
  })
}


selectCountry(){
  this.fetchNews();
}

}
