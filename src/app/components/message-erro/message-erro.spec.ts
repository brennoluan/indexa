import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';

import { MessageErro } from './message-erro';

describe('MessageErro', () => {
  let component: MessageErro;
  let fixture: ComponentFixture<MessageErro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageErro],
    }).compileComponents();

    fixture = TestBed.createComponent(MessageErro);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('control', new FormControl('', Validators.required));
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows a validation error after the control is touched', async () => {
    component.control().markAsTouched();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Campo obrigatório');
  });
});
