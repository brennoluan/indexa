import { Injectable } from '@angular/core';
import { contacts } from '../data/contacts';
import type { Contact } from '../interfaces/contact';

const CONTACTS_KEY = 'contacts';
@Injectable({
  providedIn: 'root',
})
export class PhoneBook {
  private contacts: Contact[] = contacts;

  constructor() {
    const storedContacts = localStorage.getItem(CONTACTS_KEY);
    if (storedContacts) {
      this.contacts = JSON.parse(storedContacts);
    }
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.contacts));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.contacts));
  }

  removeContact(contact: Contact): void {
    this.contacts = this.contacts.filter(c => c !== contact);
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.contacts));
  }
}
