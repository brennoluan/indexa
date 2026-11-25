import { Container } from "../../components/container/container";
import { Header } from "../../components/header/header";
import { Divider } from "../../components/divider/divider";
import { Contact as ContactComponent } from "../../components/contact/contact";
import { Component, inject, signal } from "@angular/core";
import { PhoneBook } from "../../services/phone-book";
import { Contact } from "../../interfaces/contact";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-list-contacts',
  imports: [Container, Header, ContactComponent, Divider, FormsModule, RouterLink],
  templateUrl: './list-contacts.html',
  styleUrl: './list-contacts.css',
})
export class ListContacts {
  alfabeth: string = 'abcdefghijklmnopqrstuvwxyz';
  phoneBookService = inject(PhoneBook);
  contacts = signal<Contact[]>(this.phoneBookService.getContacts());
  searchTerm: string = '';

  removeAccents(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  getContactsByLetter(letter: string): Contact[] {
    return this.contacts().filter(contact => this.removeAccents(contact.name.toLowerCase()).startsWith(this.removeAccents(letter.toLowerCase())) &&
      this.removeAccents(contact.name.toLowerCase()).includes(this.removeAccents(this.searchTerm.toLowerCase())));
  }
}
