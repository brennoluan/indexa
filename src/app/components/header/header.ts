import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = input.required<string>();
  bannerSrc = input.required<string>();
  initialScreen = input<boolean>(false);

}
