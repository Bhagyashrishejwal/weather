import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent {
  news: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    const apiKey = '14b769cfef324452992bec95cf05384';
    const apiUrl = `https://newsapi.org/v2/top-headlines?title=${title}&apiKey=${apiKey}`;

    this.http.get<any>(apiUrl).subscribe(data => {
      this.news = data.articles[0];
    });
  }
}

