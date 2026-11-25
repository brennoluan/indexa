import { Component, inject, OnInit } from '@angular/core';
import { Container } from '../../components/container/container';
import { Divider } from '../../components/divider/divider';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { PhoneBook } from '../../services/phone-book';

@Component({
  selector: 'app-form-contact',
  imports: [Container, Divider, ReactiveFormsModule, NgClass, RouterLink],
  templateUrl: './form-contact.html',
  styleUrl: './form-contact.css',
})
export class FormContact implements OnInit {

  contactForm!: FormGroup;
  private phoneBookService = inject(PhoneBook);
  private router = inject(Router);

  initForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthday: new FormControl(''),
      social: new FormControl(''),
      observations: new FormControl('')
    });
  }

  ngOnInit() {
    this.initForm();
  }

  handleSubmit() {
    if (this.contactForm.valid) {
      this.phoneBookService.addContact(this.contactForm.value);
      this.contactForm.reset();
      this.router.navigate(['/lista-contatos']);
    }
  }
}
