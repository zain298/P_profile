import { NewspageService } from './newspage.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css'],
})
export class NewspageComponent implements OnInit {
  retrieveResonse = [] as any;
  base64Data: any;
  retrievedImage: any;
  constructor(
    private newsPageService: NewspageService,
    private httpClient: HttpClient
  ) {}
  newsformationAll = [] as any;
  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.newsPageService.getAll().subscribe((response) => {
      if (response) {
        console.log(response);
        if (response.error && response.status) {
          // this.toastrservice.warning("Message", " " + response.message);
        } else {
          this.newsformationAll = response;
          console.log(this.newsformationAll);
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
  getSingleImage(id: any) {
    this.httpClient
      .get('https://testing-spring-app.herokuapp.com/image/' + id)
      .subscribe((res) => {
        console.log(res);
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.image;
        // console.log(this.base64Data);
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        console.log(this.retrievedImage);
      });
  }
  show(id: string) {
    console.log('idddd: ' + id);
  }
}
