import { Component } from '@angular/core';
import { VIDEO_RESOURCES } from '../../../core/data/media.data';

@Component({
  selector: 'app-video-list-page',
  templateUrl: './video-list-page.component.html',
})
export class VideoListPageComponent {
  readonly videos = VIDEO_RESOURCES;
  readonly groups = [...new Set(this.videos.map((video) => video.group))];
  expandedGroup: string | null = this.groups[0] ?? null;
  selectedVideoSlug: string | null = this.videos[0]?.slug ?? null;

  get selectedVideo() {
    return this.videos.find((video) => video.slug === this.selectedVideoSlug);
  }

  toggleGroup(group: string): void {
    this.expandedGroup = this.expandedGroup === group ? null : group;
  }

  selectVideo(videoSlug: string): void {
    this.selectedVideoSlug = videoSlug;
  }
}
