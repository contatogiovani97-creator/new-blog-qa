import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  @ViewChild('profilePhotoDialog')
  private profilePhotoDialog!: ElementRef<HTMLDialogElement>;

  openProfilePhoto(): void {
    this.profilePhotoDialog.nativeElement.showModal();
  }

  closeProfilePhoto(): void {
    this.profilePhotoDialog.nativeElement.close();
  }

  closeProfilePhotoOnBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeProfilePhoto();
    }
  }
}
