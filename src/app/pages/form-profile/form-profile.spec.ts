import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { provideRouter, RouterLink } from '@angular/router';

import { FormProfile } from './form-profile';

describe('FormProfile', () => {
  let component: FormProfile;
  let fixture: ComponentFixture<FormProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormProfile],
      providers: [provideHttpClient(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(FormProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('links to the form for the displayed contact', async () => {
    component.contact.update(contact => ({ ...contact, id: 4 }));
    await fixture.whenStable();

    const link = fixture.debugElement.query(By.css('.botao-editar')).injector.get(RouterLink);
    expect(link.urlTree?.toString()).toBe('/formulario/4');
  });
});
