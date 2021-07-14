import { TestBed } from '@angular/core/testing';

import { SNewsService } from './s-news.service';

describe('SNewsService', () => {
  let service: SNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
