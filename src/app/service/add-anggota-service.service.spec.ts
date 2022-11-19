import { TestBed } from '@angular/core/testing';

import { AddAnggotaServiceService } from './add-anggota-service.service';

describe('AddAnggotaServiceService', () => {
  let service: AddAnggotaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAnggotaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
