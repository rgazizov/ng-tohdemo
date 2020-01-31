import { TestBed } from '@angular/core/testing';

import { TmpAPIService } from './tmp-api.service';

describe('TmpAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TmpAPIService = TestBed.get(TmpAPIService);
    expect(service).toBeTruthy();
  });
});
