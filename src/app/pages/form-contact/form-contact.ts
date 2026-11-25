import { Component } from '@angular/core';
import { Container } from '../../components/container/container';
import { Divider } from '../../components/divider/divider';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-contact',
  imports: [Container, Divider, ReactiveFormsModule, NgClass, RouterLink],
  templateUrl: './form-contact.html',
  styleUrl: './form-contact.css',
})
export class FormContact {

  contactForm!: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
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
