import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  newsformationSingle = [] as any;
  constructor(
    private newsService: NewsService,
    private httpClient: HttpClient
  ) {}
  retrieveResonse = [] as any;
  base64Data: any;
  retrievedImage: any;
  newsformationAll = [] as any;
  // filtered = [] as any;
  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.newsService.getAll().subscribe((response) => {
      if (response) {
        console.log(response);
        if (response.error && response.status) {
          // this.toastrservice.warning("Message", " " + response.message);
        } else {
          this.newsformationAll = response;
          this.newsformationAll = Object.values(response).slice(1, 2);
          console.log(this.newsformationAll);
          this.newsformationSingle = Object.values(response).slice(0, 1);

          console.log(this.newsformationSingle);
          this.getAllImages();
        }
      }
    });
  }
  getAllImages() {
    this.httpClient
      .get('https://testing-spring-app.herokuapp.com/image/all')
      .subscribe((res: any) => {
        console.log(res);
        this.retrieveResonse = res;

        this.base64Data = this.retrieveResonse.image;
        // console.log(this.base64Data);
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        // console.log(this.retrievedImage);
      });
  }
}
