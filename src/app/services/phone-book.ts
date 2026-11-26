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

  getContactById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.API_URL}/contacts/${id}`);
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.API_URL}/contacts`, contact);
  }

  removeContact(id: number): Observable<Contact> {
    return this.http.delete<Contact>(`${this.API_URL}/contacts/${id}`);
  }

  editContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.API_URL}/contacts/${contact.id}`, contact);
  }

  editOrSaveContact(contact: Contact): Observable<Contact> {
    if (contact.id) {
      return this.editContact(contact);
    } else {
      return this.addContact(contact);
    }
  }
}
