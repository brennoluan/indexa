import { TestBed } from '@angular/core/testing';

import { PhoneBook } from './phone-book';

describe('PhoneBook', () => {
  let service: PhoneBook;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneBook);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
