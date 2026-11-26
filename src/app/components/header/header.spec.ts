import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('bannerSrc', '/images/banner.png');
    fixture.componentRef.setInput('title', 'Adicionar contato');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('uses the form heading style outside the initial screen', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(heading.classList.contains('titulo-form')).toBe(true);
    expect(heading.textContent).toBe('Adicionar contato');
  });

  it('renders the emphasized title on the initial screen', async () => {
    fixture.componentRef.setInput('initialScreen', true);
    fixture.componentRef.setInput('title', 'Organize, <span>conecte,</span> simplifique!');
    await fixture.whenStable();

    const heading: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(heading.classList.contains('titulo')).toBe(true);
    expect(heading.querySelector('span')?.textContent).toBe('conecte,');
  });
});
