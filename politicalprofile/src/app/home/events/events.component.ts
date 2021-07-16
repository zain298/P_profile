import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  eventsformationAll = [] as any;
  filtered = [] as any;
  imageResonse: any;
  base64Data: any;
  retrievedImage: any;
  now = new Date();
  today: string = this.now.toISOString();
  constructor(
    private httpClient: HttpClient,
    private eventService: EventsService
  ) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.eventService.getAll().subscribe(
      (response: any) => {
        if (response) {
          console.log(response);
          if (response.error && response.status) {
            console.log(response);
          } else {
            // this.eventsformationAll = response;
            this.eventsformationAll = Object.values(response).slice(0, 2);
            console.log(this.eventsformationAll);

            // this.filtered = this.eventsformationAll.filter(
            //   () => event['date'] >= this.today
            // );
            // console.log(this.eventsformationAll);
            this.getAllImages();
          }
        }
      },
      (error: any) => {}
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
