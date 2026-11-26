import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name = input.required<string>();
  phone = input.required<string>();
  id = input.required<number>();
  avatar = input.required<string | ArrayBuffer>();
}
