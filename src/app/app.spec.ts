import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the shared site navigation', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('nav[aria-label="Navegação principal"]')).toBeTruthy();
    expect(compiled.querySelector('a[href="/artigos"]')?.textContent).toContain('ARTIGOS');
  });

  it('should provide an enlarged profile photo dialog', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.brand-avatar-button')).toBeTruthy();
    expect(compiled.querySelector('dialog.profile-photo-dialog img')?.getAttribute('src')).toBe(
      '/foto-perfil-linkedin.png',
    );
  });
});
