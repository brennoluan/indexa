import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from './components/container/container';
import { Header } from './components/header/header';
import { Divider } from './components/divider/divider';
import { Contact as ContactComponent } from './components/contact/contact';
import type { Contact } from './interfaces/contact';
import { PhoneBook } from './services/phone-book';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Container, Header, Divider, ContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  alfabeth: string = 'abcdefghijklmnopqrstuvwxyz';

  phoneBookService = inject(PhoneBook);

  contacts = signal<Contact[]>(this.phoneBookService.getContacts());

  getContactsByLetter(letter: string): Contact[] {
    return this.contacts().filter(contact => contact.name.toLowerCase().startsWith(letter));
  }
}
