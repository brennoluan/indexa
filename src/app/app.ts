import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from './components/container/container';
import { Header } from './components/header/header';
import { Divider } from './components/divider/divider';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Container, Header, Divider],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('indexa');
}
