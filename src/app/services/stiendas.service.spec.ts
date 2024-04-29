import { TestBed } from '@angular/core/testing';

import { StiendasService } from './stiendas.service';

describe('StiendasService', () => {
  let service: StiendasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StiendasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
