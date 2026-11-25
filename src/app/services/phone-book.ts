import { Injectable } from '@angular/core';
import { contacts } from '../data/contacts';
import type { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class PhoneBook {
  getContacts(): Contact[] {
    return contacts;
  }
}
