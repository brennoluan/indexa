import { Component, inject, OnInit, signal } from '@angular/core';
import { Container } from '../../components/container/container';
import { Contact } from '../../interfaces/contact';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PhoneBook } from '../../services/phone-book';
import { Divider } from '../../components/divider/divider';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-form-profile',
  imports: [Container, RouterLink, Divider, Header],
  templateUrl: './form-profile.html',
  styleUrl: './form-profile.css',
})
export class FormProfile implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  phoneBookService = inject(PhoneBook);
  router = inject(Router);

  contact = signal<Contact>({
    id: 0,
    name: '',
    phone: '',
    avatar: '',
    email: '',
    birthday: '',
    social: '',
    observations: ''
  });

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.phoneBookService.getContactById(parseInt(id)).subscribe(contact => {
        this.contact.set(contact);
      });
    }
  }

  delete() {
    if (this.contact().id) {
      this.phoneBookService.removeContact(this.contact().id).subscribe(() => {
        this.router.navigate(['/lista-contatos']);
      });
    }
  }
}