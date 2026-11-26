import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Container } from '../../components/container/container';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { PhoneBook } from '../../services/phone-book';
import { MessageErro } from '../../components/message-erro/message-erro';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-form-contact',
  imports: [Container, ReactiveFormsModule, NgClass, MessageErro, Header],
  templateUrl: './form-contact.html',
  styleUrl: './form-contact.css',
})
export class FormContact implements OnInit {

  contactForm!: FormGroup;
  private phoneBookService = inject(PhoneBook);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private changeDetector = inject(ChangeDetectorRef);

  initForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      avatar: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthday: new FormControl(''),
      social: new FormControl(''),
      observations: new FormControl('')
    });
  }

  ngOnInit() {
    this.initForm();
    this.loadContact();
  }

  getControl(name: string): FormControl {
    const control = this.contactForm.get(name);
    if (!control) {
      throw new Error(`Form control with name '${name}' not found`);
    }
    return control as FormControl;
  }

  loadContact() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.phoneBookService.getContactById(parseInt(id)).subscribe(contact => {
        this.contactForm.patchValue(contact);
        this.changeDetector.markForCheck();
      });
    }
  }

  onSelectedFile(event: any) {
    const file: File = event?.target.files[0];
    if (file) {
      this.readFile(file);
    }
  }

  readFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        this.contactForm.get('avatar')?.setValue(reader.result);
        this.changeDetector.markForCheck();
      }
    };
    reader.readAsDataURL(file);
  }

  handleSubmit() {
    if (this.contactForm.valid) {
      const newContact = this.contactForm.value;
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      newContact.id = id ? parseInt(id) : undefined;
      this.phoneBookService.editOrSaveContact(newContact).subscribe(() => {
        this.contactForm.reset();
        this.router.navigate(['/lista-contatos']);
      });
    }
  }

  cancel() {
    this.contactForm.reset();
    this.router.navigate(['/lista-contatos']);
  }
}
