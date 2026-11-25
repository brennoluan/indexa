import { Component } from '@angular/core';
import { Container } from '../../components/container/container';
import { Divider } from '../../components/divider/divider';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  imports: [Container, Divider, ReactiveFormsModule],
  templateUrl: './form-contact.html',
  styleUrl: './form-contact.css',
})
export class FormContact {

  contactForm!: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      birthday: new FormControl(''),
      social: new FormControl(''),
      observations: new FormControl('')
    });
  }

  handleSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
