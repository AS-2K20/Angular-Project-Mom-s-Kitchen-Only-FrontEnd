import { TestBed } from '@angular/core/testing';

import { UserNameService } from './user-name.service';

describe('UserNameServiceService', () => {
  let service: UserNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
