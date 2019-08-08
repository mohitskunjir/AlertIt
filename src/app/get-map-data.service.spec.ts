import { TestBed, inject } from '@angular/core/testing';

import { GetMapDataService } from './get-map-data.service';

describe('GetMapDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMapDataService]
    });
  });

  it('should be created', inject([GetMapDataService], (service: GetMapDataService) => {
    expect(service).toBeTruthy();
  }));
});
