import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-section-content',
  templateUrl: './section-content.component.html',
  styleUrl: './section-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionContentComponent {
  constructor() {}
}
