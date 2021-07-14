import { EventpageService } from './eventpage.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.css'],
})
export class EventpageComponent implements OnInit {
  // retrieveResonse: any;
  imageResonse: any;
  base64Data: any;
  retrievedImage: any;
  constructor(
    private httpClient: HttpClient,
    private eventsService: EventpageService
  ) {}

  eventsformationAll = [] as any;
  //  eventsformationAll: string[] = [];
  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.eventsService.getAll().subscribe(
      (response) => {
        if (response) {
          console.log(response);
          if (response.error && response.status) {
            console.log(response);
          } else {
            this.eventsformationAll = response;
            // console.log(this.eventsformationAll);
            this.getAllImages();
          }
        }
      },
      (error) => {}
    );
  }
  getAllImages() {
    this.httpClient
      .get('https://testing-spring-app.herokuapp.com/image/all')
      .subscribe((res: any) => {
        console.log(res);
        this.imageResonse = res;

        this.base64Data = this.imageResonse.image;
        // console.log(this.base64Data);
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        // console.log(this.retrievedImage);
      });
  }
}
