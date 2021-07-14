import { TestBed } from '@angular/core/testing';

import { NewspageService } from './newspage.service';

describe('NewspageService', () => {
  let service: NewspageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewspageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
