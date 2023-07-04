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
    
    
  }

  displayDetails(){
    this.news = this.dataService.allNews.find((news:any) => news.title == this.title);
    console.log(this.news);
    
  }
}

