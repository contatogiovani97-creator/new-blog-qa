import { Component } from '@angular/core';
import { NEWS_SOURCES } from '../../../core/data/media.data';

@Component({
  selector: 'app-radar-page',
  templateUrl: './radar-page.component.html',
})
export class RadarPageComponent {
  readonly sources = NEWS_SOURCES;
}
