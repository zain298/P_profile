import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SNewsService } from './s-news.service';

@Component({
  selector: 'app-s-newspage',
  templateUrl: './s-newspage.component.html',
  styleUrls: ['./s-newspage.component.css'],
})
export class SNewspageComponent implements OnInit {
  id: string | null | undefined;
  recentNewsAll = [] as any;
  SingalNews = [] as any;

  imageID: string | undefined;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  // retrievedImage: string;
  constructor(
    private _Activatedroute: ActivatedRoute,
    private newsService: SNewsService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      // let id = toInteger(params.get('id'));
      // console.log(id + typeof id);
      // console.log(params);
      // console.log('id: ' + this.id);
      // console.log('type of id: ' + typeof this.id);
      this.getid(this.id);
    });

    this.getAllRecentNews();
    this.getSingleNews(this.id);
  }
  getid(id: any) {
    let d = id.split(':');
    // console.log(d);
    this.id = d[1];
    // console.log('new id: ' + this.id);
  }
  getImageId(SingalNews: any) {
    this.imageID = SingalNews.imageId;
    console.log('imageID:' + this.imageID);
    this.getSingleImage(this.imageID);
  }
  // APis call from Service file
  getAllRecentNews() {
    this.newsService.getRecent().subscribe((response) => {
      if (response) {
        console.log(response);
        if (response.error && response.status) {
          // this.toastrservice.warning("Message", " " + response.message);
        } else {
          this.recentNewsAll = response;
          // console.log(this.recentNewsAll);
        }
      }
    });
  }
  getSingleNews(id: any) {
    // console.log('singleID=' + id);
    this.newsService.getSingleNews(id).subscribe((response) => {
      if (response) {
        console.log(response);
        if (response.error && response.status) {
          // this.toastrservice.warning("Message", " " + response.message);
        } else {
          this.SingalNews = response;
          this.getImageId(this.SingalNews);
          // console.log(this.SingalNews);
        }
      }
    });
  }
  getSingleImage(id: any) {
    this.httpClient
      .get('https://testing-spring-app.herokuapp.com/news/image/' + id)
      .subscribe((res) => {
        console.log(res);
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      });
  }
}
