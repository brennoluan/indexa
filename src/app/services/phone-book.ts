import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contacts } from '../data/contacts';
import type { Contact } from '../interfaces/contact';
import { Observable } from 'rxjs';

const CONTACTS_KEY = 'contacts';
@Injectable({
  providedIn: 'root',
})
export class PhoneBook {
  private readonly API_URL = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.API_URL}/contacts`);
  }

  addContact(contact: Contact): void {
    this.http.post(`${this.API_URL}/contacts`, contact).subscribe();
  }

  removeContact(contact: Contact): void {
    this.http.delete(`${this.API_URL}/contacts/${contact.id}`).subscribe();
  }
}
