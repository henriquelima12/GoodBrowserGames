import { TestBed } from '@angular/core/testing';

import { MembrosService } from './membros.service';

describe('MembrosService', () => {
  let service: MembrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
