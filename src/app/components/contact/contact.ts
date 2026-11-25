import { Component, input } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name = input.required<string>();
  phone = input.required<string>();
}
