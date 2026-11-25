import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Container } from './components/container/container';
import { Header } from './components/header/header';
import { Divider } from './components/divider/divider';
import { Contact as ContactComponent } from './components/contact/contact';
import type { Contact } from './interfaces/contact';
import { PhoneBook } from './services/phone-book';

@Component({
  selector: 'app-root',
  imports: [Container, Header, Divider, ContactComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  alfabeth: string = 'abcdefghijklmnopqrstuvwxyz';
  phoneBookService = inject(PhoneBook);
  contacts = signal<Contact[]>(this.phoneBookService.getContacts());
  searchTerm = signal('');

  removeAccents(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  getContactsByLetter(letter: string): Contact[] {
    return this.contacts().filter(contact => this.removeAccents(contact.name.toLowerCase()).startsWith(this.removeAccents(letter.toLowerCase())) &&
      this.removeAccents(contact.name.toLowerCase()).includes(this.removeAccents(this.searchTerm().toLowerCase())));
  }
}
