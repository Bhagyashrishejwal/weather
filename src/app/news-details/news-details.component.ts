import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent {
  news: any;
  title: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private dataService: DataService) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get('title');
    console.log(this.title);

    this.displayDetails();
    
    // const apiKey = '14b769cfef324452992bec95cf05384';
    // const apiUrl = `https://newsapi.org/v2/top-headlines?title=${title}&apiKey=${apiKey}`;

    // this.http.get<any>(apiUrl).subscribe(data => {
    //   console.log(data);
    //   this.news = data.articles[0];
    // });
  }

  displayDetails(){
    this.news = this.dataService.allNews.find((news:any) => news.title == this.title);
    console.log(this.news);
    
  }
}

