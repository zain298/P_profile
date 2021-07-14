import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  emailinfo!: {
    email: '';
    name: '';
    phone: '';
    message: '';
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(emailinfo: any) {
    this.emailinfo = {
      email: '',
      name: '',
      phone: '',
      message: '',
    };
  }
}
