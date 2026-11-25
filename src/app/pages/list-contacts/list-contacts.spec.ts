import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContacts } from './list-contacts';

describe('ListContacts', () => {
  let component: ListContacts;
  let fixture: ComponentFixture<ListContacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListContacts],
    }).compileComponents();

    fixture = TestBed.createComponent(ListContacts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
