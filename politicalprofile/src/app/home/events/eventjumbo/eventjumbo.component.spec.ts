import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventjumboComponent } from './eventjumbo.component';

describe('EventjumboComponent', () => {
  let component: EventjumboComponent;
  let fixture: ComponentFixture<EventjumboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventjumboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventjumboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
