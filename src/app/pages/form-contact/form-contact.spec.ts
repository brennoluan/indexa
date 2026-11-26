import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { firstValueFrom } from 'rxjs';

import { FormContact } from './form-contact';

describe('FormContact', () => {
  let component: FormContact;
  let fixture: ComponentFixture<FormContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormContact],
      providers: [provideHttpClient(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(FormContact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updates the avatar preview after reading a file', async () => {
    const avatar = component.contactForm.get('avatar')!;
    const valueChanged = firstValueFrom(avatar.valueChanges);

    component.readFile(new File(['image'], 'avatar.png', { type: 'image/png' }));
    await valueChanged;
    await fixture.whenStable();

    const image: HTMLImageElement | null = fixture.nativeElement.querySelector('figure img');
    expect(image?.getAttribute('src')).toBe('data:image/png;base64,aW1hZ2U=');
  });

  it('does not show an avatar preview when the form is reset', () => {
    component.contactForm.reset();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('figure img')).toBeNull();
  });
});
