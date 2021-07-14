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
  constructor(
    private httpClient: HttpClient,
    private eventsService: EventpageService
  ) {}
  lists = [
    { id: 0, title: 'ali' },
    { id: 1, title: 'atim' },
    { id: 2, title: 'talha' },
    { id: 3, title: 'ubaid' },
    { id: 4, title: 'jameel' },
    { id: 5, title: 'zain' },
  ];
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
            console.log(this.eventsformationAll);
          }
        }
      },
      (error) => {}
    );
  }
}
