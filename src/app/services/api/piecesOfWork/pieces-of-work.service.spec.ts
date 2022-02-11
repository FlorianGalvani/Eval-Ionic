import { TestBed } from '@angular/core/testing';

import { PiecesOfWorkService } from './pieces-of-work.service';

describe('PiecesOfWorkService', () => {
  let service: PiecesOfWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiecesOfWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
