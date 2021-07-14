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
  constructor(private newsPageService: NewspageService) {}
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
        }
      }
    });
  }
}
