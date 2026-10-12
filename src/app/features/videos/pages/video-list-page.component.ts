import { Component } from '@angular/core';
import { VIDEO_RESOURCES } from '../../../core/data/media.data';

@Component({
  selector: 'app-video-list-page',
  templateUrl: './video-list-page.component.html',
})
export class VideoListPageComponent {
  readonly videos = VIDEO_RESOURCES;
}
